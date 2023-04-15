package groupi

import (
	"context"
	"log"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	"github.com/manhrev/runtracking/backend/group/internal/transformer"
	group_pb "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/groupz"
)

func (s *groupIServer) ListGroupI(
	ctx context.Context,
	request *group_pb.ListGroupIRequest,
) (*group_pb.ListGroupIReply, error) {
	groups, err := s.entClient.Groupz.Query().Where(
		groupz.IDIn(request.GetGroupIds()...),
	).All(ctx)

	if err != nil {
		log.Printf("Error ListGroupI: %v", err)
		return nil, status.Internal(err.Error())
	}

	return &group_pb.ListGroupIReply{
		Groups: transformer.TransformGroupListEntToGroupList(groups),
	}, nil
}
