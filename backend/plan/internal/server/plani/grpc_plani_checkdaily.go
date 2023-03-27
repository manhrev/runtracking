package plani

import (
	"context"
	"log"
	"time"

	plan "github.com/manhrev/runtracking/backend/plan/pkg/api"
)

func (s *planIServer) CheckDaily(ctx context.Context, request *plan.CheckDailyRequest) (*plan.CheckDailyReply, error) {

	go func() {
		err := s.repository.Plan.CheckProgressDaily(context.Background(), request.GetTimeCheck().AsTime())
		time.Sleep(10 * time.Second)
		if err != nil {
			log.Printf("Error when check daily: %v", err)
			return
		}
		log.Printf("Check daily success")
		return
	}()

	return &plan.CheckDailyReply{}, nil
}
