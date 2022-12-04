package sample

import (
	"context"

	sample "github.com/manhrev/runtracking/backend/sample/pkg/api"
	"github.com/manhrev/runtracking/backend/sample/pkg/ent/object"
)

func (s *sampleServer) Get(ctx context.Context, request *sample.GetRequest) (*sample.GetReply, error) {
	object, err := s.entClient.Object.Query().Where(object.ID(request.GetId())).Only(ctx)
	if err != nil {
		return nil, err
	}

	return &sample.GetReply{
		Reply: object.Name,
	}, nil
}
