package message

import (
	"context"
	"fmt"

	"entgo.io/ent/dialect/sql"
	"github.com/manhrev/runtracking/backend/chat/internal/status"
	"github.com/manhrev/runtracking/backend/chat/pkg/code"
	"github.com/manhrev/runtracking/backend/chat/pkg/ent"
	"github.com/manhrev/runtracking/backend/chat/pkg/ent/message"
	"google.golang.org/protobuf/types/known/timestamppb"
)

const sqlTimeFormat = "2006-01-02 15:04:05" //"Jan 2, 2006 at 3:04pm (MST)"
type Message interface {
	Create(ctx context.Context,
		fromUserID int64,
		toUserID int64,
		time *timestamppb.Timestamp,
		message string,
	) error

	List(ctx context.Context,
		fromUserID int64,
		toUserID int64,
		limit uint32,
		offset uint64,
		from *timestamppb.Timestamp,
		to *timestamppb.Timestamp) ([]*ent.Message, int, error)

	Update(ctx context.Context,
		fromUserID int64,
		toUserID int64,
	) error

	Delete(ctx context.Context,
		fromUserID int64,
		toUserID int64) error

	ListConversation(ctx context.Context,
		userID int64) ([]*ent.Message, error)
}

type messageImpl struct {
	entClient *ent.Client
}

func New(entClient *ent.Client) Message {
	return &messageImpl{
		entClient: entClient,
	}
}

func (m *messageImpl) Create(ctx context.Context,
	fromUserID int64,
	toUserID int64,
	time *timestamppb.Timestamp,
	message string,
) error {
	query := m.entClient.Message.Create().
		SetFromUserID(fromUserID).
		SetToUserID(toUserID).
		SetMessage(message).
		SetIsSeenFromUserID(true)

	if time != nil {
		query.SetCreatedAt(time.AsTime())
	}

	return query.Exec(ctx)
}

func (c *messageImpl) Update(ctx context.Context,
	fromUserID int64,
	toUserID int64,
) error {
	err := c.entClient.Message.Update().
		Where(message.FromUserIDEQ(fromUserID), message.ToUserIDEQ(toUserID)).
		SetIsSeenFromUserID(true).
		Exec(ctx)
	if err != nil {
		return status.Internal(fmt.Sprintf("Error when update conversation: %v", err))
	}

	err = c.entClient.Message.Update().
		Where(message.FromUserIDEQ(toUserID), message.ToUserIDEQ(fromUserID)).
		SetIsSeenToUserID(true).
		Exec(ctx)

	if err != nil {
		return status.Internal(fmt.Sprintf("Error when update conversation: %v", err))
	}

	return nil
}

func (m *messageImpl) List(ctx context.Context,
	fromUserID int64,
	toUserID int64,
	limit uint32,
	offset uint64,
	from *timestamppb.Timestamp,
	to *timestamppb.Timestamp) ([]*ent.Message, int, error) {
	query := m.entClient.Message.Query().
		Where(message.Or(
			message.And(message.FromUserIDEQ(fromUserID), message.ToUserIDEQ(toUserID), message.SoftDeleteFromUserIDEQ(false)),
			message.And(message.FromUserIDEQ(toUserID), message.ToUserIDEQ(fromUserID), message.SoftDeleteToUserIDEQ(false))),
		).
		Order(ent.Desc(message.FieldCreatedAt, message.FieldID))

	// time range
	if from != nil && to != nil {
		query.Where(
			message.CreatedAtGTE(from.AsTime().Local()),
			message.CreatedAtLTE(to.AsTime().Local()),
		)
	}

	// Count number of records
	total, err := query.Count(ctx)
	if err != nil {
		return nil, 0, status.Error(code.Code_INTERNAL)
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

	messageEntList, err := query.All(ctx)
	if err != nil {
		return nil, total, status.Internal(fmt.Sprintf("Fail when fetching message list: %v", err))
	}

	return messageEntList, total, nil
}

func (c *messageImpl) ListConversation(ctx context.Context,
	userID int64) ([]*ent.Message, error) {

	messages, err := c.entClient.Debug().Message.Query().Where(func(s *sql.Selector) {
		t := sql.Table(message.Table).As("t2")
		s.Where(
			sql.And(
				sql.EQ(
					s.C(message.FieldCreatedAt),
					sql.Select(sql.Max(t.C(message.FieldCreatedAt))).From(t).
						Where(sql.And(
							sql.ColumnsEQ(s.C(message.FieldToUserID), t.C(message.FieldToUserID)),
							sql.ColumnsEQ(s.C(message.FieldFromUserID), t.C(message.FieldFromUserID)),
						)),
				),
				sql.Or(
					sql.And(sql.EQ(s.C(message.FieldFromUserID), userID), sql.EQ(s.C(message.FieldSoftDeleteFromUserID), false)),
					sql.And(sql.EQ(s.C(message.FieldToUserID), userID), sql.EQ(s.C(message.FieldSoftDeleteToUserID), false)),
				),
			))
	}).All(ctx)

	if err != nil {
		return nil, status.Internal(fmt.Sprintf("Error when fetch conversation: %v", err))
	}

	return messages, nil
}

func (c *messageImpl) Delete(ctx context.Context,
	fromUserID int64,
	toUserID int64) error {

	err := c.entClient.Message.Update().
		Where(message.FromUserIDEQ(fromUserID), message.ToUserIDEQ(toUserID)).
		SetSoftDeleteFromUserID(true).
		Exec(ctx)
	if err != nil {
		return status.Internal(fmt.Sprintf("Error when delete conversation: %v", err))
	}

	err = c.entClient.Message.Update().
		Where(message.FromUserIDEQ(toUserID), message.ToUserIDEQ(fromUserID)).
		SetSoftDeleteToUserID(true).
		Exec(ctx)

	if err != nil {
		return status.Internal(fmt.Sprintf("Error when delete conversation: %v", err))
	}

	return nil
}
