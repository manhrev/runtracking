package transformer

import (
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	helper "github.com/manhrev/runtracking/backend/chat/helper"
	chatpb "github.com/manhrev/runtracking/backend/chat/pkg/api"
	"github.com/manhrev/runtracking/backend/chat/pkg/ent"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func TransformMessageListEntToMessageList(messageList []*ent.Message, fromUserID int64) []*chatpb.MessageInfo {
	messageInfoList := []*chatpb.MessageInfo{}
	for _, messageEnt := range messageList {
		messageInfo := &chatpb.MessageInfo{
			Id:         messageEnt.ID,
			Message:    messageEnt.Message,
			FromUserId: messageEnt.FromUserID,
			ToUserId:   messageEnt.ToUserID,
			Time:       timestamppb.New(messageEnt.CreatedAt),
		}

		if fromUserID == messageEnt.FromUserID {
			messageInfo.IsToUserSeen = messageEnt.IsSeenToUserID
		} else {
			messageInfo.IsToUserSeen = messageEnt.IsSeenFromUserID
		}

		messageInfoList = append(messageInfoList, messageInfo)
	}
	return messageInfoList
}

func TransformMessageListEntToConversationInfo(messageList []*ent.Message,
	userInfoMap map[int64]*auth.UserInfo, userID int64) []*chatpb.ConversationInfo {
	conversationInfoList := []*chatpb.ConversationInfo{}
	for _, messageEnt := range messageList {
		userInfo := userInfoMap[helper.GetPartnerID(messageEnt.FromUserID, messageEnt.ToUserID, userID)]
		conversationInfo := &chatpb.ConversationInfo{
			Partner: &chatpb.UserInfo{
				UserId:         userInfo.UserId,
				DisplayName:    userInfo.DisplayName,
				ProfilePicture: userInfo.ProfilePicture,
				Username:       userInfo.Username,
			},
		}

		lastMessage := &chatpb.MessageInfo{
			Id:         messageEnt.ID,
			Message:    messageEnt.Message,
			FromUserId: messageEnt.FromUserID,
			ToUserId:   messageEnt.ToUserID,
			Time:       timestamppb.New(messageEnt.CreatedAt),
		}

		if userID == messageEnt.FromUserID {
			lastMessage.IsToUserSeen = messageEnt.IsSeenToUserID
		} else {
			lastMessage.IsToUserSeen = messageEnt.IsSeenFromUserID
		}

		conversationInfo.LastMessage = lastMessage
		conversationInfoList = append(conversationInfoList, conversationInfo)
	}
	return conversationInfoList
}
