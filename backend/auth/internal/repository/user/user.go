package user

import (
	"context"

	"github.com/manhrev/runtracking/backend/auth/internal/status"
	authpb "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/auth/pkg/ent"
	user "github.com/manhrev/runtracking/backend/auth/pkg/ent/user"
)

type User interface {
	List(
		ctx context.Context,
		sortBy authpb.ListUserRequest_UserSortBy,
		user_ids []int64,
		search_by_name string,
		ascending bool,
		limit uint32,
		offset uint64,
	) (records []*ent.User, total int64, err error)
}

type userImpl struct {
	entClient *ent.Client
}

func New(entClient *ent.Client) User {
	return &userImpl{
		entClient: entClient,
	}
}

func (m *userImpl) List(
	ctx context.Context,
	sortBy authpb.ListUserRequest_UserSortBy,
	user_ids []int64,
	search_by_name string,
	ascending bool,
	limit uint32,
	offset uint64,
) ([]*ent.User, int64, error) {
	var (
		byField string
	)

	query := m.entClient.User.Query()

	// sort by type
	switch sortBy {
	case authpb.ListUserRequest_USER_SORT_BY_NAME:
		byField = user.FieldUsername
	case authpb.ListUserRequest_USER_SORT_BY_UNSPECIFIED:
		byField = user.FieldID
	}

	// ascending?
	if ascending {
		query.Order(ent.Asc(byField))
	} else {
		query.Order(ent.Desc(byField))
	}

	if search_by_name != "" {
		query.Where(user.DisplayNameContainsFold(search_by_name))
	}

	if len(user_ids) > 0 {
		query.Where(user.IDIn(user_ids...))
	}

	// Count number of records
	total, err := query.Count(ctx)
	if err != nil {
		return nil, 0, status.Internal(err.Error())
	}

	//limit offset
	if limit <= 0 {
		query.Limit(10)
	} else {
		query.Limit(int(limit))
	}

	if offset > 0 {
		query.Offset(int(offset))
	} else {
		query.Offset(0)
	}

	users, err := query.All(ctx)
	if err != nil {
		return nil, 0, status.Internal(err.Error())
	}

	return users, int64(total), nil
}
