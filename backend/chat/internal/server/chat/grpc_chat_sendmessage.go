package chat

import (
	"context"

	extractor "github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/chat/internal/status"
	chatpb "github.com/manhrev/runtracking/backend/chat/pkg/api"
)

func (s *chatServer) SendMessage(ctx context.Context, request *chatpb.SendMessageRequest) (*chatpb.SendMessageReply, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	err = s.repository.Message.Create(ctx, userId, request.ToUserId, request.Time, request.Message)
	if err != nil {
		return nil, err
	}
	return &chatpb.SendMessageReply{}, nil
}
