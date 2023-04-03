package intermediaryi

import (
	"context"
	"log"
	"net/http"
	"time"

	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func (s *intermediaryIHttpServer) CheckDailyChallenge(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()

	// API called at 00:10:00 UTC+7 -> must check at 23:59 the day before
	currentTimeOfDayBefore := time.Now().In(time.FixedZone("UTC+7", 7*60*60)).AddDate(0, 0, -1)
	lastMomentOfDayBefore := time.Date(
		currentTimeOfDayBefore.Year(),
		currentTimeOfDayBefore.Month(),
		currentTimeOfDayBefore.Day(), 23, 59, 59, 100,
		currentTimeOfDayBefore.Location())

	// call plani
	_, err := s.groupIClient.CheckDailyProgressChallenge(ctx, &group.CheckDailyProgressChallengeRequest{
		TimeCheck: timestamppb.New(lastMomentOfDayBefore),
	})
	if err != nil {
		log.Printf("Error when calling CheckDaily: %s", err)
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("500 - Internal server error, please try again later!"))
		return
	}
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("200 - Done!"))
	return
}
