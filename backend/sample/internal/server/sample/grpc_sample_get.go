package sample

import (
	"context"

	sample "github.com/manhrev/runtracking/backend/sample/pkg/api"
)

func (s *sampleServer) Get(ctx context.Context, request *sample.GetRequest) (*sample.GetReply, error) {
	return &sample.GetReply{
		Reply: "Test ok!",
	}, nil
}
