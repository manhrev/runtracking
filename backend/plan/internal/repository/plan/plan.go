package plan

import (
	"github.com/manhrev/runtracking/backend/plan/pkg/ent"
)

const sqlTimeFormat = "2006-01-02 15:04:05" //"Jan 2, 2006 at 3:04pm (MST)"

type Plan interface {
}

type planImpl struct {
	entClient *ent.Client
}

func New(entClient *ent.Client) Plan {
	return &planImpl{
		entClient: entClient,
	}
}
