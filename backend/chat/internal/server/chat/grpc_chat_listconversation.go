package chat

import (
	"context"
	"sort"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	extractor "github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/chat/helper"
	"github.com/manhrev/runtracking/backend/chat/internal/status"
	"github.com/manhrev/runtracking/backend/chat/internal/transformer"
	chatpb "github.com/manhrev/runtracking/backend/chat/pkg/api"
	"github.com/manhrev/runtracking/backend/chat/pkg/ent"
)

type MessageSlice []*ent.Message

func (s MessageSlice) Less(i, j int) bool {
	return s[i].CreatedAt.After((s[j].CreatedAt))
}
func (s MessageSlice) Swap(i, j int) { s[i], s[j] = s[j], s[i] }
func (s MessageSlice) Len() int      { return len(s) }

func (s *chatServer) ListConversation(ctx context.Context, request *chatpb.ListConversationRequest) (*chatpb.ListConversationReply, error) {
	limit, offset := request.Limit, request.Offset
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	messages, err := s.repository.Message.ListConversation(ctx, userId)
	if err != nil {
		return nil, err
	}

	partnerMap := GetPartnerMap(messages, userId)
	lastConversationList := []*ent.Message{}
	partnerIDs := []int64{}
	for partnerID, m := range partnerMap {
		lastConversationList = append(lastConversationList, m)
		partnerIDs = append(partnerIDs, partnerID)
	}

	if len(partnerIDs) > 0 {
		reply, err := s.authClient.GetUsersByIds(ctx, &auth.GetByIdsRequest{
			Ids: partnerIDs,
		})

		if err != nil {
			return nil, err
		}

		// Get userInfo Map to get information of partner
		userInfoList := reply.GetUsers()
		userInfoMap := make(map[int64]*auth.UserInfo)
		for _, userInfo := range userInfoList {
			userInfoMap[userInfo.UserId] = userInfo
		}

		// Sort by time to get list message order desc by time
		var messageSlice MessageSlice = lastConversationList
		sort.Sort(messageSlice)

		lastConversationList = LimitMessageList(messageSlice, limit, offset)

		return &chatpb.ListConversationReply{
			Conversations: transformer.TransformMessageListEntToConversationInfo(lastConversationList,
				userInfoMap, userId),
			Total: int64(len(lastConversationList)),
		}, nil
	}

	return &chatpb.ListConversationReply{
		Conversations: []*chatpb.ConversationInfo{},
		Total:         0,
	}, nil
}

func LimitMessageList(messageEntList []*ent.Message, limit uint32, offset uint64) []*ent.Message {
	//limit offset
	if limit <= 0 {
		limit = 10
	}

	if offset < 0 {
		offset = 0
	}

	if int(offset) >= len(messageEntList) {
		return []*ent.Message{}
	}

	if int(limit+uint32(offset)) > len(messageEntList) {
		return messageEntList[offset:]
	}
	return messageEntList[offset : limit+uint32(offset)]

}
func GetPartnerMap(messageEntList []*ent.Message, userID int64) map[int64]*ent.Message {
	messageEntMap := make(map[int64]*ent.Message)
	for _, messageEnt := range messageEntList {
		partnerID := helper.GetPartnerID(messageEnt.FromUserID, messageEnt.ToUserID, userID)
		lastConversation, ok := messageEntMap[partnerID]
		if ok {
			if messageEnt.CreatedAt.After(lastConversation.CreatedAt) {
				messageEntMap[partnerID] = messageEnt
			}
		} else {
			messageEntMap[partnerID] = messageEnt
		}
	}

	return messageEntMap
}
