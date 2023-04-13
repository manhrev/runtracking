package transformer

import (
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
