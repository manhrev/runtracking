package transformer

import (
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func TransformSeasonEntToSeasonInfo(seasonEnt *ent.Season) *group.SeasonInfo {
	seasonInfo := &group.SeasonInfo{
		Id:          seasonEnt.ID,
		Name:        seasonEnt.Name,
		Description: seasonEnt.Description,
		Picture:     seasonEnt.Picture,
		Status:      group.RuleStatus(seasonEnt.Status),
		From:        timestamppb.New(seasonEnt.StartTime),
		To:          timestamppb.New(seasonEnt.EndTime),
	}

	return seasonInfo
}

func TransformSeasonEntListToSeasonInfoList(seasonEntList []*ent.Season) []*group.SeasonInfo {
	seasonInfoList := []*group.SeasonInfo{}
	for _, seasonEnt := range seasonEntList {
		seasonInfoList = append(seasonInfoList, TransformSeasonEntToSeasonInfo(seasonEnt))
	}
	return seasonInfoList
}
