package chat

import (
	"context"

	extractor "github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/chat/internal/status"
	"github.com/manhrev/runtracking/backend/chat/internal/transformer"
	chatpb "github.com/manhrev/runtracking/backend/chat/pkg/api"
)

func (s *chatServer) GetHistoryChat(ctx context.Context, request *chatpb.GetHistoryChatRequest) (*chatpb.GetHistoryChatReply, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	// Update history seen status chat conversation of sender user to true
	err = s.repository.Message.Update(ctx, userId, request.ToUserId)
	if err != nil {
		return nil, err
	}

	messageEntList, total, err := s.repository.Message.List(ctx,
		userId,
		request.ToUserId,
		request.Limit,
		request.Offset,
		request.From,
		request.To,
	)
	if err != nil {
		return nil, err
	}

	return &chatpb.GetHistoryChatReply{
		MessageInfoList: transformer.TransformMessageListEntToMessageList(messageEntList, userId),
		Total:           int64(total),
	}, nil
}
