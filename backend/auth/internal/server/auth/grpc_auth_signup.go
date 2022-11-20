package auth

import (
	"context"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
)

func (s *authServer) SignUp(ctx context.Context, request *auth.SignUpRequest) (*auth.SignUpReply, error) {
	return &auth.SignUpReply{}, nil
}
