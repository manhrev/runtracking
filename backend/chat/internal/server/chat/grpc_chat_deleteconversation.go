package chat

import (
	"context"

	extractor "github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/chat/internal/status"
	chatpb "github.com/manhrev/runtracking/backend/chat/pkg/api"
)

func (s *chatServer) DeleteConversation(ctx context.Context, request *chatpb.DeleteConversationRequest) (*chatpb.DeleteConversationReply, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	err = s.repository.Message.Delete(ctx, userId, request.ToUserId)
	if err != nil {
		return nil, err
	}
	return &chatpb.DeleteConversationReply{}, nil
}
