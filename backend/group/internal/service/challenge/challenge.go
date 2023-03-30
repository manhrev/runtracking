package challenge

import (
	"context"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/group/internal/repository"
	"github.com/manhrev/runtracking/backend/group/internal/status"
	"github.com/manhrev/runtracking/backend/group/internal/transformer"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
)

type Challenge interface {
	CreateChallenge(
		ctx context.Context,
		userId int64,
		request *group.CreateChallengeRequest,
	) (*group.CreateChallengeReply, error)

	UpdateChallenge(
		ctx context.Context,
		userId int64,
		request *group.UpdateChallengeRequest,
	) (*group.UpdateChallengeReply, error)

	ListChallenge(
		ctx context.Context,
		request *group.ListChallengeRequest,
	) (*group.ListChallengeReply, error)

	DeleteChallenge(
		ctx context.Context,
		userId int64,
		request *group.DeleteChallengeRequest,
	) (*group.DeleteChallengeReply, error)
	// AcceptMember(
	// 	ctx context.Context,
	// 	userId int64,
	// 	request *group.AcceptMemberRequest,
	// ) (*group.AcceptMemberReply, error)

	// BanMember(
	// 	ctx context.Context,
	// 	userId int64,
	// 	request *group.BanMemberRequest,
	// ) (*group.BanMemberReply, error)
	// LeaveGroup(
	// 	ctx context.Context,
	// 	userId int64,
	// 	request *group.LeaveGroupRequest,
	// ) (*group.LeaveGroupReply, error)
}

type challengeImpl struct {
	entClient  *ent.Client
	authClient auth.AuthIClient
	repository *repository.Repository
}

func New(entClient *ent.Client,
	repository *repository.Repository,
	authClient auth.AuthIClient) Challenge {
	return &challengeImpl{
		entClient:  entClient,
		repository: repository,
		authClient: authClient,
	}
}

func (c *challengeImpl) CreateChallenge(
	ctx context.Context,
	userId int64,
	request *group.CreateChallengeRequest,
) (*group.CreateChallengeReply, error) {
	groupEntity, err := c.repository.Group.Get(ctx, request.GetGroupId())
	if err != nil {
		return nil, err
	}

	if userId != groupEntity.LeaderID {
		return nil, status.Internal("User is not an admin of group")
	}

	challengeEnt, err := c.repository.Challenge.Create(ctx, groupEntity.ID, request.ChallengeInfo)
	if err != nil {
		return nil, err
	}

	// set challenge rules
	challengeRules, err := c.repository.Challenge.CreateBulkChallengeRules(ctx,
		userId, groupEntity.ID, challengeEnt.ID, request.ChallengeInfo)
	if err != nil {
		return nil, err
	}

	//list current member of group to insert into challenge
	members, err := c.repository.Group.ListMember(ctx, groupEntity.ID,
		group.Member_MEMBER_STATUS_ACTIVE)

	// Create Challenge Member
	challengeMembers, err := c.repository.Challenge.CreateBulkChallengeMember(ctx,
		members, challengeEnt)

	// Create challenge Member rules
	_, err = c.repository.Challenge.CreateBulkChallengeMemberRule(ctx,
		challengeMembers, challengeRules)
	if err != nil {
		return nil, err
	}

	return &group.CreateChallengeReply{}, nil
}

func (c *challengeImpl) UpdateChallenge(
	ctx context.Context,
	userId int64,
	request *group.UpdateChallengeRequest,
) (*group.UpdateChallengeReply, error) {
	groupEntity, err := c.repository.Group.Get(ctx, request.GetGroupId())
	if err != nil {
		return nil, err
	}

	if userId != groupEntity.LeaderID {
		return nil, status.Internal("User is not an admin of group")
	}

	err = c.repository.Challenge.Update(ctx, groupEntity.ID, request.ChallengeInfo)
	if err != nil {
		return nil, err
	}

	return &group.UpdateChallengeReply{}, nil
}

func (c *challengeImpl) DeleteChallenge(
	ctx context.Context,
	userId int64,
	request *group.DeleteChallengeRequest,
) (*group.DeleteChallengeReply, error) {
	groupEntity, err := c.repository.Group.Get(ctx, request.GetGroupId())
	if err != nil {
		return nil, err
	}

	if userId != groupEntity.LeaderID {
		return nil, status.Internal("User is not an admin of group")
	}

	err = c.repository.Challenge.Delete(ctx, request.Id)
	if err != nil {
		return nil, err
	}

	return &group.DeleteChallengeReply{}, nil
}

func (c *challengeImpl) ListChallenge(
	ctx context.Context,
	request *group.ListChallengeRequest,
) (*group.ListChallengeReply, error) {
	challengeEnts, total, err := c.repository.Challenge.List(ctx,
		request.GroupId, request.SortBy, request.SearchByName, request.FilterByRules,
		request.FilterByType, request.Ascending, request.From, request.To, request.Limit, request.GetOffset())

	if err != nil {
		return nil, err
	}

	var userIds []int64
	for _, challengeEnt := range challengeEnts {
		if challengeEnt.Edges.FirstMember != nil {
			userIds = append(userIds)
		}
	}

	// list user completed challenge first

	userInfoMap := make(map[int64]*auth.UserInfo)
	if len(userIds) > 0 {
		users, err := c.authClient.ListUser(ctx, &auth.ListUserRequest{
			UserIds: userIds,
		})

		if err != nil {
			return nil, err
		}
		for _, userInfo := range users.Users {
			userInfoMap[userInfo.UserId] = userInfo
		}
	}

	if err != nil {
		return nil, err
	}

	return &group.ListChallengeReply{
		ChallengeInfoList: transformer.TransformChallengeEntListToChallengeInfoList(challengeEnts, request.GroupId, userInfoMap),
		Total:             total,
	}, nil
}

// func (m *memberImpl) LeaveGroup(
// 	ctx context.Context,
// 	userId int64,
// 	request *group.LeaveGroupRequest,
// ) (*group.LeaveGroupReply, error) {
// 	memberEnt, err := m.repository.Member.GetByUserID(ctx, userId, request.GetGroupId())

// 	if err != nil {
// 		return nil, err
// 	}

// 	err = m.repository.Member.Delete(ctx, memberEnt.ID)

// 	if err != nil {
// 		return nil, err
// 	}

// 	return &group.LeaveGroupReply{}, nil
// }

// func (m *memberImpl) AcceptMember(
// 	ctx context.Context,
// 	userId int64,
// 	request *group.AcceptMemberRequest,
// ) (*group.AcceptMemberReply, error) {
// 	groupEntity, err := m.repository.Group.Get(ctx, request.GetGroupId())
// 	if err != nil {
// 		return nil, err
// 	}

// 	if userId != groupEntity.LeaderID {
// 		return nil, status.Internal("User is not an admin of group")
// 	}

// 	err = m.repository.Member.Update(ctx,
// 		request.GetMemberId(),
// 		request.GetGroupId(),
// 		group.Member_MEMBER_STATUS_ACTIVE)

// 	if err != nil {
// 		return nil, err
// 	}

// 	return &group.AcceptMemberReply{}, nil
// }

// func (m *memberImpl) BanMember(
// 	ctx context.Context,
// 	userId int64,
// 	request *group.BanMemberRequest,
// ) (*group.BanMemberReply, error) {
// 	groupEntity, err := m.repository.Group.Get(ctx, request.GetGroupId())
// 	if err != nil {
// 		return nil, err
// 	}

// 	if userId != groupEntity.LeaderID {
// 		return nil, status.Internal("User is not an admin of group")
// 	}

// 	err = m.repository.Member.Update(ctx,
// 		request.GetMemberId(),
// 		request.GetGroupId(),
// 		group.Member_MEMBER_STATUS_BANNED)

// 	if err != nil {
// 		return nil, err
// 	}

// 	return &group.BanMemberReply{}, nil
// }
