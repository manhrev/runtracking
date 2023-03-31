package challenge

import (
	"context"
	"fmt"

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

	GetChallenge(
		ctx context.Context,
		request *group.GetChallengeRequest,
	) (*group.GetChallengeReply, error)
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

func (c *challengeImpl) isActiveChallengeExisted(ctx context.Context,
	groupId int64) (bool, error) {
	challengeActive, err := c.repository.Challenge.GetActiveChallenge(ctx, groupId)
	if err != nil {
		return false, err
	}

	if challengeActive != nil {
		return true, nil
	}
	return false, nil
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

	isChallengeActiveExisted, err := c.isActiveChallengeExisted(ctx, request.GroupId)
	if err != nil {
		return nil, err
	}

	if isChallengeActiveExisted {
		return nil, status.Internal(fmt.Sprintf("There was one active challenge in group. You need to deactivate it before creating the new one"))
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

func (c *challengeImpl) GetChallenge(
	ctx context.Context,
	request *group.GetChallengeRequest,
) (*group.GetChallengeReply, error) {
	challengeEnt, err := c.repository.Challenge.Get(ctx, request.GetId())
	if err != nil {
		return nil, err
	}

	var userIds []int64
	if challengeEnt.Edges.ChallengeMembers != nil {
		memberEntList := challengeEnt.Edges.ChallengeMembers
		for _, memberEnt := range memberEntList {
			userIds = append(userIds, memberEnt.Edges.Member.UserID)
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

	return &group.GetChallengeReply{
		ChallengeInfo: transformer.TransformChallengeEntToChallengeInfo(challengeEnt, userInfoMap),
	}, nil
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

	if request.ChallengeInfo.Status == group.RuleStatus_RULE_STATUS_INPROGRESS {
		isChallengeActiveExisted, err := c.isActiveChallengeExisted(ctx, request.GroupId)
		if err != nil {
			return nil, err
		}

		if isChallengeActiveExisted {
			return nil, status.Internal(fmt.Sprintf("There was one active challenge in group. You need to deactivate it before creating the new one"))
		}
	}

	err = c.repository.Challenge.Update(ctx, groupEntity.ID, request.ChallengeInfo, request.GetIdsRuleToDelete())
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
	challengeEnt, err := c.repository.Challenge.GetChallengeWithGroup(ctx, request.GetId())
	if err != nil {
		return nil, err
	}

	if userId != challengeEnt.Edges.Groupz.LeaderID {
		return nil, status.Internal("User is not an admin of group")
	}

	err = c.repository.Challenge.Delete(ctx, request.Id)
	if err != nil {
		return nil, err
	}

	return &group.DeleteChallengeReply{}, nil
}

// func (c *challengeImpl) GetChallenge(
// 	ctx context.Context,
// 	request *group.GetChallengeRequest,
// ) (*group.GetChallengeReply, error) {
// 	challengeEnt, err := c.repository.Challenge.GetChallenge(ctx, request.Id)
// 	if err != nil {
// 		return nil, err
// 	}

// 	return &group.DeleteChallengeReply{}, nil
// }

func (c *challengeImpl) ListChallenge(
	ctx context.Context,
	request *group.ListChallengeRequest,
) (*group.ListChallengeReply, error) {
	challengeEnts, total, err := c.repository.Challenge.List(ctx,
		request.GroupId,
		request.SortBy,
		request.SearchByName,
		request.FilterByRules,
		request.FilterByType,
		request.Ascending,
		request.GetStatus(),
		request.From, request.To,
		request.Limit, request.GetOffset())

	if err != nil {
		return nil, err
	}

	var userIds []int64
	for _, challengeEnt := range challengeEnts {
		if challengeEnt.Edges.FirstMember != nil {
			userIds = append(userIds, challengeEnt.Edges.FirstMember.UserID)
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
		ChallengeInfoList: transformer.TransformChallengeEntListToChallengeInfoList(challengeEnts, userInfoMap),
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
