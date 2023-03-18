package transformer

import (
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/auth/pkg/ent"
)

func TransformActivityListEntToActivityList(userList []*ent.User) []*auth.UserInfo {
	userInfoList := []*auth.UserInfo{}
	for _, userEnt := range userList {
		userInfo := &auth.UserInfo{
			UserId:      userEnt.ID,
			DisplayName: userEnt.DisplayName,
			Username:    userEnt.Username,
			Email:       userEnt.Email,
			PhoneNumber: userEnt.Phone,
			Height:      userEnt.Height,
			Weight:      userEnt.Weight,
			Age:         userEnt.Age,
		}
		userInfoList = append(userInfoList, userInfo)
	}
	return userInfoList
}
