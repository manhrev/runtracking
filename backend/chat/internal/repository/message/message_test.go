package message

import (
	"context"
	"fmt"
	"log"
	"testing"

	_ "github.com/go-sql-driver/mysql"
	"github.com/manhrev/runtracking/backend/chat/pkg/ent"
)

const (
	_driver = "mysql"
	_url    = "root:password@1@tcp(localhost:33311)/chat?charset=utf8&parseTime=true"
)

func Test_List(t *testing.T) {
	entClient, err := ent.Open(_driver, _url)
	if err != nil {
		log.Fatalf("error creating connection to database%v", err.Error())
	}
	var (
		ctx    = context.Background()
		client = entClient
	)

	messageRepo := New(client)
	records, err := messageRepo.ListConversation(
		ctx,
		1,
	)
	if err != nil {
		log.Fatalf("error while querying:%s", err.Error())
	}

	lastConversationList := TransferToListLastConversation(records, 1)
	// fmt.Println(len(lastConversationList))
	lastConversationList = lastConversationList[5:6]
	for _, lastConversation := range lastConversationList {
		fmt.Println(lastConversation)
	}

}

func TransferToListLastConversation(messageEntList []*ent.Message, userID int64) []*ent.Message {
	messageEntMap := make(map[int64]*ent.Message)
	for _, messageEnt := range messageEntList {
		partnerID := getPartnerID(messageEnt.FromUserID, messageEnt.ToUserID, userID)
		lastConversation, ok := messageEntMap[partnerID]
		if ok {
			if messageEnt.CreatedAt.After(lastConversation.CreatedAt) {
				messageEntMap[partnerID] = messageEnt
			}
		} else {
			messageEntMap[partnerID] = messageEnt
		}
	}
	lastConversationList := []*ent.Message{}
	for _, m := range messageEntMap {
		lastConversationList = append(lastConversationList, m)
	}
	return lastConversationList
}

func getPartnerID(fromUserID int64, toUserID int64, userID int64) int64 {
	if fromUserID == userID {
		return toUserID
	}
	return fromUserID
}
