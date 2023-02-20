package cloudtask

import (
	"context"
	"encoding/json"
	"fmt"
	"log"

	cloudtasks "cloud.google.com/go/cloudtasks/apiv2"
	taskspb "cloud.google.com/go/cloudtasks/apiv2/cloudtaskspb"
	"google.golang.org/api/option"
	"google.golang.org/grpc"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type CloudTask interface {
	CreateHTTPTask(url string, message NotificationTransfer, scheduledTime *timestamppb.Timestamp) (*taskspb.Task, error)
}

type cloudTask struct {
	projectID  string
	locationID string
	queueID    string
}

type NotificationTransfer struct {
	Id               int    `json:"id"`
	Message          string `json:"message"`
	ReceivedId       int    `json:"received_id"`
	NotificationType int    `json:"notification_type"`
}

func NewCloudTask() CloudTask {
	return &cloudTask{
		projectID:  "daring-acumen-370401",
		locationID: "asia-southeast2",
		queueID:    "test-queue1",
	}
}

func (task *cloudTask) CreateHTTPTask(url string, message NotificationTransfer, scheduledTime *timestamppb.Timestamp) (*taskspb.Task, error) {
	ctx := context.Background()
	// client, err := cloudtasks.NewClient(ctx, option.WithCredentialsFile("daring-acumen-370401-ddf8f283029a.json"))
	conn, _ := grpc.Dial("gcloud-tasks-emulator:8123", grpc.WithInsecure())
	clientOpt := option.WithGRPCConn(conn)
	client, err := cloudtasks.NewClient(context.Background(), clientOpt)

	if err != nil {
		return nil, fmt.Errorf("NewClient: %v", err)
	}
	defer client.Close()

	// Build the Task queue path.
	queuePath := fmt.Sprintf("projects/%s/locations/%s/queues/%s", task.projectID, task.locationID, task.queueID)
	log.Println(scheduledTime)
	// Build the Task payload.
	// https://godoc.org/google.golang.org/genproto/googleapis/cloud/tasks/v2#CreateTaskRequest
	req := &taskspb.CreateTaskRequest{
		Parent: queuePath,
		Task: &taskspb.Task{
			// https://godoc.org/google.golang.org/genproto/googleapis/cloud/tasks/v2#HttpRequest
			MessageType: &taskspb.Task_HttpRequest{
				HttpRequest: &taskspb.HttpRequest{
					HttpMethod: taskspb.HttpMethod_POST,
					Url:        url,
				},
			},
			ScheduleTime: scheduledTime,
		},
	}

	// Add a payload message if one is present.
	req.Task.GetHttpRequest().Body, err = json.Marshal(message)
	if err != nil {
		return nil, fmt.Errorf("Unmarshal error %v", err)
	}

	createdTask, err := client.CreateTask(ctx, req)
	fmt.Println(createdTask)

	if err != nil {
		return nil, fmt.Errorf("cloudtasks.CreateTask: %v", err)
	}

	return createdTask, nil
}
