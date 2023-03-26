package transformer

import (
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func TransformGroupListEntToGroupList(groupList []*ent.Groupz) []*group.GroupInfo {
	groupInfoList := []*group.GroupInfo{}
	for _, groupEnt := range groupList {
		groupInfo := &group.GroupInfo{
			Id:                groupEnt.ID,
			Name:              groupEnt.Name,
			Description:       groupEnt.Description,
			BackgroundPicture: groupEnt.BackgroundPicture,
			LeaderId:          groupEnt.LeaderID,
			CreatedAt:         timestamppb.New(groupEnt.CreatedAt),
			UpdatedAt:         timestamppb.New(groupEnt.UpdatedAt),
			NumOfChallenge:    int64(len(groupEnt.Edges.Challenges)),
			NumOfMembers:      int64(len(groupEnt.Edges.Members)),
		}
		groupInfoList = append(groupInfoList, groupInfo)
	}
	return groupInfoList
}

func TransformUserInfoListToMemberList(userInfoList []*auth.UserInfo, memberMap map[int64]*ent.Member, groupz *ent.Groupz) []*group.Member {
	memberList := []*group.Member{}
	for _, userInfo := range userInfoList {
		member := &group.Member{
			UserId:      userInfo.GetUserId(),
			MemberId:    memberMap[userInfo.GetUserId()].ID,
			DisplayName: userInfo.GetDisplayName(),
			Username:    userInfo.GetUsername(),
			Email:       userInfo.GetEmail(),
			CreatedAt:   timestamppb.New(memberMap[userInfo.GetUserId()].CreatedAt),
			Status:      group.Member_Status(memberMap[userInfo.GetUserId()].Status),
			IsAdmin:     (userInfo.GetUserId() == groupz.LeaderID),
		}
		memberList = append(memberList, member)
	}
	return memberList
}
