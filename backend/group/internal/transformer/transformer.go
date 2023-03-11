package transformer

import (
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
)

func TransformGroupListEntToGroupList(groupList []*ent.Groupz) []*group.GroupInfo {
	groupInfoList := []*group.GroupInfo{}
	for _, groupEnt := range groupList {
		groupInfo := &group.GroupInfo{
			Id:                groupEnt.ID,
			Name:              groupEnt.Name,
			Description:       groupEnt.Description,
			BackgroundPicture: groupEnt.BackgroundPicture,
		}
		groupInfoList = append(groupInfoList, groupInfo)
	}
	return groupInfoList
}
