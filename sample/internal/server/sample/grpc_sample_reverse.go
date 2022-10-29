package sample

import (
	"context"

	sample "github.com/manhrev/runtracking/sample/pkg/api"
)

func (s *sampleServer) Reverse(ctx context.Context, request *sample.ReversRequest) (*sample.ReverseReply, error) {
	return &sample.ReverseReply{
		Rev: -request.GetNum(),
	}, nil
}
