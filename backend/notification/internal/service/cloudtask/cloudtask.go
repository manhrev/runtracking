package cloudtask

import (
	"context"
	"fmt"

	cloudtasks "cloud.google.com/go/cloudtasks/apiv2"
	taskspb "cloud.google.com/go/cloudtasks/apiv2/cloudtaskspb"
	"google.golang.org/api/option"
	"google.golang.org/grpc"
)

type CloudTask interface {
	CreateHTTPTask(projectID, locationID, queueID, url, message string) (*taskspb.Task, error)
}

type cloudTask struct {
}

func (task *cloudTask) CreateHTTPTask(projectID, locationID, queueID, url, message string) (*taskspb.Task, error) {
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
	queuePath := fmt.Sprintf("projects/%s/locations/%s/queues/%s", projectID, locationID, queueID)

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
		},
	}

	// Add a payload message if one is present.
	// req.Task.GetHttpRequest().Body = []byte(message)

	createdTask, err := client.CreateTask(ctx, req)
	fmt.Println(createdTask)

	if err != nil {
		return nil, fmt.Errorf("cloudtasks.CreateTask: %v", err)
	}

	return createdTask, nil
}
