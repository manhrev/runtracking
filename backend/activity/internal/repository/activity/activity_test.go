package activity

import (
	"context"
	"log"
	"testing"

	_ "github.com/go-sql-driver/mysql"
	activitypb "github.com/manhrev/runtracking/backend/activity/pkg/api"
	"github.com/manhrev/runtracking/backend/activity/pkg/ent"
)

const (
	_driver = "mysql"
	_url    = "root:password@1@tcp(localhost:33308)/activity?charset=utf8&parseTime=true"
)

// func Test_List(t *testing.T) {
// 	entClient, err := ent.Open(_driver, _url)
// 	if err != nil {
// 		log.Fatalf("error creating connection to database%v", err.Error())
// 	}
// 	var (
// 		ctx    = context.Background()
// 		client = entClient
// 	)

// 	activityRepo := New(client)
// 	records, total, err := activityRepo.List(
// 		ctx,
// 		3,
// 		activitypb.ActivityType_ACTIVITY_TYPE_UNSPECIFIED,
// 		activitypb.ActivitySortBy_ACTIVITY_SORT_BY_UNSPECIFIED,
// 		false,
// 		timestamppb.New(time.Now().AddDate(0, 0, -1)),
// 		timestamppb.Now(),
// 		10,
// 		0,
// 	)
// 	if err != nil {
// 		log.Fatalf("error while querying:%s", err.Error())
// 	}

// 	log.Println(total)
// 	log.Println(records)

// }

// func Test_Delelte(t *testing.T) {
// 	entClient, err := ent.Open(_driver, _url)
// 	if err != nil {
// 		log.Fatalf("error creating connection to database%v", err.Error())
// 	}
// 	var (
// 		ctx    = context.Background()
// 		client = entClient
// 	)
// 	actIds := []int64{0}
// 	activityRepo := New(client)
// 	err = activityRepo.Delete(
// 		ctx,
// 		3,
// 		actIds,
// 	)
// 	if err != nil {
// 		log.Fatalf("error while delete:%s", err.Error())
// 	}

// }

func Test_ListStatistic(t *testing.T) {
	entClient, err := ent.Open(_driver, _url)
	if err != nil {
		log.Fatalf("error creating connection to database%v", err.Error())
	}
	var (
		ctx    = context.Background()
		client = entClient
	)
	activityRepo := New(client)
	activityRepo.GetStatistic(
		ctx,
		3,
		activitypb.ActivityType_ACTIVITY_TYPE_RUNNING,
		nil,
		nil,
		activitypb.GetActivityStatisticRequest_GORUP_BY_MONTH,
		7,
	)
}
