package intermediaryi

import (
	"context"
	"log"
	"net/http"

	plan "github.com/manhrev/runtracking/backend/plan/pkg/api"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func (s *intermediaryIHttpServer) CheckDailyPlan(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	// call plani
	_, err := s.planIClient.CheckDaily(ctx, &plan.CheckDailyRequest{
		TimeCheck: timestamppb.Now(),
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
