package admin

import (
	"context"
	"log"
	"testing"

	_ "github.com/go-sql-driver/mysql"
	"github.com/manhrev/runtracking/backend/event/pkg/ent"
)

const (
	_driver = "mysql"
	_url    = "root:password@1@tcp(localhost:33312)/event?charset=utf8&parseTime=true"
)

func Test_Get(t *testing.T) {
	entClient, err := ent.Open(_driver, _url)
	if err != nil {
		log.Fatalf("error creating connection to database%v", err.Error())
	}
	var (
		ctx    = context.Background()
		client = entClient
	)

	events, err := client.Event.Query().All(ctx)
	if err != nil {
		log.Fatalf("error while querying:%s", err.Error())
	}

	log.Println(events)

}
