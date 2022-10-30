package sample

import (
	"context"

	sample "github.com/manhrev/runtracking/backend/sample/pkg/api"
)

func (s *sampleServer) Set(ctx context.Context, request *sample.SetRequest) (*sample.SetReply, error) {
	_, err := s.entClient.Object.Create().
		SetName(request.GetSet()).
		SetValue(0).
		Save(ctx)
	if err != nil {
		return nil, err
	}

	return &sample.SetReply{}, nil
}
