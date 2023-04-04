package member

import (
	"context"
	"fmt"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	grouppb "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challenge"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/groupz"
)

//Accept Member → List all challenges →
//Add challenge member each of challenge →
//Add challenge member rules each of challenge member
//And add member_season to tracking point
func (m *memberImpl) AcceptMember(
	ctx context.Context,
	userId int64,
	request *grouppb.AcceptMemberRequest,
) (*grouppb.AcceptMemberReply, error) {
	groupEntity, err := m.repository.Group.Get(ctx, request.GetGroupId(), false, false)
	if err != nil {
		return nil, err
	}

	if userId != groupEntity.LeaderID {
		return nil, status.Internal("User is not an admin of group")
	}

	err = m.repository.Member.Update(ctx,
		request.GetMemberId(),
		request.GetGroupId(),
		grouppb.Member_MEMBER_STATUS_ACTIVE)

	if err != nil {
		return nil, err
	}

	//Get Challenges of group
	challengeEntList, err := m.entClient.Challenge.Query().
		Where(challenge.HasGroupzWith(groupz.IDEQ(groupEntity.ID)),
			challenge.StatusIn(int64(grouppb.RuleStatus_RULE_STATUS_COMING_SOON), int64(grouppb.RuleStatus_RULE_STATUS_INPROGRESS))).
		All(ctx)
	if err != nil {
		return nil, status.Internal(fmt.Sprintf("Error when get challange ent list: %v", err))
	}

	for _, challengeEnt := range challengeEntList {
		challengeMemberEnt, err := m.repository.Challenge.CreateChallengeMember(ctx,
			request.MemberId, challengeEnt)
		if err != nil {
			return nil, err
		}

		_, err = m.repository.Challenge.CreateChallengeMemberRule(ctx,
			challengeMemberEnt, challengeEnt)
		if err != nil {
			return nil, err
		}
	}

	//Add member to season member current to tracking point each season
	err = m.repository.Season.InitialSeasonRecordForMember(ctx, request.MemberId)
	if err != nil {
		return nil, err
	}

	return &group.AcceptMemberReply{}, nil
}
