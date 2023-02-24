package plan

import (
	"context"
	"log"
	"testing"

	_ "github.com/go-sql-driver/mysql"
	"github.com/manhrev/runtracking/backend/plan/pkg/ent"
)

const (
	_driver = "mysql"
	_url    = "root:password@1@tcp(localhost:33308)/plan?charset=utf8&parseTime=true"
)

func Test_List(t *testing.T) {
	entClient, err := ent.Open(_driver, _url)
	if err != nil {
		log.Fatalf("error creating connection to database%v", err.Error())
	}
	var (
		_ = context.Background()
		_ = entClient
	)

	// 	planRepo := New(client)
	// 	records, total, err := planRepo.List(
	// 		ctx,
	// 		3,
	// 		planpb.planType_plan_TYPE_UNSPECIFIED,
	// 		planpb.planSortBy_plan_SORT_BY_UNSPECIFIED,
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

}

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
// 	planRepo := New(client)
// 	err = planRepo.Delete(
// 		ctx,
// 		3,
// 		actIds,
// 	)
// 	if err != nil {
// 		log.Fatalf("error while delete:%s", err.Error())
// 	}

// }

// func Test_ListStatistic(t *testing.T) {
// 	entClient, err := ent.Open(_driver, _url)
// 	if err != nil {
// 		log.Fatalf("error creating connection to database%v", err.Error())
// 	}
// 	var (
// 		ctx    = context.Background()
// 		client = entClient
// 	)
// 	planRepo := New(client)
// 	planRepo.GetStatistic(
// 		ctx,
// 		3,
// 		planpb.planType_plan_TYPE_RUNNING,
// 		nil,
// 		nil,
// 		0,
// 		7,
// 	)
// }
