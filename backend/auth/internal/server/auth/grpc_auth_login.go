package auth

import (
	"context"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
)

func (s *authServer) Login(ctx context.Context, request *auth.LoginRequest) (*auth.LoginReply, error) {
	return &auth.LoginReply{}, nil
}
