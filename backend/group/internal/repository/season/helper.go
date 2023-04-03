package season

import (
	"context"
	"fmt"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	grouppb "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/season"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func checkValidPeriodSeason(ctx context.Context,
	entClient *ent.Client,
	from *timestamppb.Timestamp,
	to *timestamppb.Timestamp) (bool, error) {
	seasonEnList, err := entClient.Season.Query().
		Where(season.StatusIn(int64(grouppb.RuleStatus_RULE_STATUS_COMING_SOON), int64(grouppb.RuleStatus_RULE_STATUS_INPROGRESS))).
		Order(ent.Desc(season.FieldStartTime)).
		All(ctx)

	if err != nil {
		return false, status.Internal(fmt.Sprintf("Error when fetching season list ent: %v", err.Error()))
	}

	for _, seasonEnt := range seasonEnList {
		if seasonEnt.Status == int64(grouppb.RuleStatus_RULE_STATUS_INPROGRESS) {
			if from.AsTime().After(seasonEnt.EndTime) {
				return true, nil
			}
			return false, status.Internal("Time of season is in range time of previous one. Check start time and end time to creating a new one")
		}

		//make sure that season created do not have the period of time in range of previous one
		if !((from.AsTime().After(seasonEnt.EndTime) && to.AsTime().After(seasonEnt.EndTime)) ||
			(from.AsTime().Before(seasonEnt.StartTime) && to.AsTime().Before(seasonEnt.StartTime))) {
			return false, status.Internal("Time of season is in range time of previous one. Check start time and end time to creating a new one")
		}
	}
	return true, nil
}
