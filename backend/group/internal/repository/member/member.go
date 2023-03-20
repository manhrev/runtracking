package member

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/groupz"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/member"
)

type Member interface {
	Create(
		ctx context.Context,
		userId int64,
		groupId int64,
	) (*ent.Member, error)
	Update(
		ctx context.Context,
		memberId int64,
		groupId int64,
		statusMem group.Member_Status,
	) error
	Delete(
		ctx context.Context,
		memberId int64,
	) error
	Get(
		ctx context.Context,
		memberId int64,
	) (*ent.Member, error)

	GetByUserID(
		ctx context.Context,
		userId int64,
		groupId int64,
	) (*ent.Member, error)

	ListMemberByUserId(
		ctx context.Context,
		userId int64,
		memberStatus group.Member_Status,
	) ([]*ent.Member, error)
}
type memberImpl struct {
	entClient *ent.Client
}

func New(entClient *ent.Client) Member {
	return &memberImpl{
		entClient: entClient,
	}
}

func (m *memberImpl) Create(
	ctx context.Context,
	userId int64,
	groupId int64,
) (*ent.Member, error) {
	newMember, err := m.entClient.Member.Create().
		SetUserID(userId).
		SetGroupzID(groupId).
		SetStatus(uint32(group.Member_MEMBER_STATUS_WAITING)).
		Save(ctx)

	if err != nil {
		return nil, status.Internal(err.Error())
	}

	return newMember, nil
}

func (m *memberImpl) Get(
	ctx context.Context,
	memberId int64,
) (*ent.Member, error) {
	memberEnt, err := m.entClient.Member.Query().
		Where(member.IDEQ(memberId)).
		First(ctx)

	if err != nil {
		return nil, status.Internal(err.Error())
	}

	return memberEnt, nil
}

func (m *memberImpl) GetByUserID(
	ctx context.Context,
	userId int64,
	groupId int64,
) (*ent.Member, error) {
	memberEnt, err := m.entClient.Member.Query().
		Where(member.UserIDEQ(userId), member.HasGroupzWith(groupz.IDEQ(groupId))).
		First(ctx)

	if err != nil {
		return nil, status.Internal(err.Error())
	}
	log.Printf("Member is: %s", memberEnt)
	if memberEnt == nil {
		return nil, status.Internal(fmt.Sprintf("Member with userID: %s && groupID: %s not found", userId, groupId))
	}

	return memberEnt, nil
}

func (m *memberImpl) Update(
	ctx context.Context,
	memberId int64,
	groupId int64,
	statusMem group.Member_Status,
) error {
	memberEnt, err := m.entClient.Member.Update().
		Where(member.IDEQ(memberId), member.HasGroupzWith(groupz.IDEQ(groupId))).
		SetStatus(uint32(statusMem)).
		SetJoiningAt(time.Now()).
		Save(ctx)

	if err != nil {
		return status.Internal(err.Error())
	}

	if memberEnt <= 0 {
		return status.Internal(fmt.Sprintf("Member with memberID: %d && groupID: %d not found", memberId, groupId))
	}

	return nil
}

func (m *memberImpl) Delete(
	ctx context.Context,
	memberId int64,
) error {
	err := m.entClient.Member.DeleteOneID(memberId).Exec(ctx)

	if err != nil {
		return status.Internal(err.Error())
	}

	return nil
}

func (m *memberImpl) ListMemberByUserId(
	ctx context.Context,
	userId int64,
	memberStatus group.Member_Status,
) ([]*ent.Member, error) {
	members, err := m.entClient.Member.Query().
		Where(member.UserIDEQ(userId), member.StatusEQ(uint32(memberStatus))).
		WithGroupz().
		All(ctx)

	if err != nil {
		return nil, status.Internal(err.Error())
	}

	return members, nil
}
