package group

import (
	"context"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/group/internal/repository"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	grouppb "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
)

type Group interface {
	Create(
		ctx context.Context,
		userId int64,
		groupInfo *grouppb.GroupInfo,
	) error
	Get(ctx context.Context, userId int64, request *grouppb.GetGroupRequest) (*grouppb.GroupInfo, error)
	Delete(ctx context.Context, userId int64, groupId int64) error
	List(ctx context.Context,
		userId int64,
		sortBy grouppb.GroupSortBy,
		searchByName string,
		filterBy grouppb.ListGroupRequest_FilterBy,
		ascending bool,
		limit uint32,
		offset uint64) (*group.ListGroupReply, error)
	Update(
		ctx context.Context,
		userId int64,
		groupInfo *grouppb.GroupInfo,
	) error

	ListMember(ctx context.Context,
		groupId int64,
		status group.Member_Status,
		sortBy grouppb.ListMembersOfGroupRequest_MOGSortBy,
		search_by_name string,
		ascending bool,
		limit uint32,
		offset uint64) (*group.ListMembersOfGroupReply, error)
}

type MemberSlice []*grouppb.Member

func (s MemberSlice) Less(i, j int) bool {
	return s[i].CreatedAt.AsTime().Before((s[j].CreatedAt.AsTime()))
}
func (s MemberSlice) Swap(i, j int) { s[i], s[j] = s[j], s[i] }
func (s MemberSlice) Len() int      { return len(s) }

type groupImpl struct {
	entClient  *ent.Client
	authClient auth.AuthIClient
	repository *repository.Repository
}

func New(entClient *ent.Client,
	repository *repository.Repository,
	authClient auth.AuthIClient) Group {
	return &groupImpl{
		entClient:  entClient,
		repository: repository,
		authClient: authClient,
	}
}
