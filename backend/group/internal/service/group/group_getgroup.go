package group

import (
	"context"

	"github.com/manhrev/runtracking/backend/group/internal/transformer"
	grouppb "github.com/manhrev/runtracking/backend/group/pkg/api"
	groupz "github.com/manhrev/runtracking/backend/group/pkg/ent/groupz"
	member "github.com/manhrev/runtracking/backend/group/pkg/ent/member"
)

func (m *groupImpl) Get(ctx context.Context, userId int64, request *grouppb.GetGroupRequest) (*grouppb.GroupInfo, error) {
	groupEnt, err := m.repository.Group.GetGroupWithMemberActive(ctx, request.GroupId)

	if err != nil {
		return nil, err
	}

	groupInfo := transformer.TransformGroupEntToGroupInfo(groupEnt)

	memberEnt, err := m.entClient.Member.Query().
		Where(member.UserIDEQ(userId), member.HasGroupzWith(groupz.IDEQ(groupEnt.ID))).
		First(ctx)

	groupInfo.MemberStatus = grouppb.Member_Status(memberEnt.Status)

	return groupInfo, nil
}
