package cloudtask

import (
	"context"
	b64 "encoding/base64"
	"encoding/json"
	"fmt"
	"log"
	"os"

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
	Id          int    `json:"id"`
	Message     string `json:"message"`
	ReceivedIds []int  `json:"received_ids"`
	SourceType  int    `json:"source_type"`
	SourceId    int    `json:"source_id"`
}

var (
	gcp_cloud_task_host string = os.Getenv("GCP_CLOUD_TASK_HOST")
	gcp_cloud_task_port string = os.Getenv("GCP_CLOUD_TASK_PORT")

	gcp_cloud_task_project_id  string = os.Getenv("GCP_CLOUD_TASK_PROJECT_ID")
	gcp_cloud_task_location_id string = os.Getenv("GCP_CLOUD_TASK_LOCATION_ID")
	gcp_cloud_task_queue_id    string = os.Getenv("GCP_CLOUD_TASK_QUEUE_ID")

	enviroment_mode     string = os.Getenv("ENVIROMENT_MODE")
	credentialKeyBase64 string = os.Getenv("CREDENTIAL_KEY")
)

func NewCloudTask() CloudTask {
	return &cloudTask{
		projectID:  gcp_cloud_task_project_id,
		locationID: gcp_cloud_task_location_id,
		queueID:    gcp_cloud_task_queue_id,
	}
}

func (task *cloudTask) CreateHTTPTask(url string, message NotificationTransfer, scheduledTime *timestamppb.Timestamp) (*taskspb.Task, error) {
	ctx := context.Background()
	var client *cloudtasks.Client
	var err error
	if enviroment_mode == "deploy" {
		// abs_name, err := filepath.Abs(credential_file_name)
		// jsonFile, err := os.Open(credential_file_name)
		// if err != nil {
		// 	log.Fatal(err.Error())
		// }

		// byteValue, _ := ioutil.ReadAll(jsonFile)
		// fmt.Println(byteValue)
		// if err != nil {
		// 	log.Fatal(err.Error())
		// }
		cred, err := b64.StdEncoding.DecodeString(credentialKeyBase64)
		if err != nil {
			log.Printf("Error decoding JSON: %v", err)
			return nil, err
		}

		client, err = cloudtasks.NewClient(ctx, option.WithCredentialsJSON(cred))
	} else {
		conn, _ := grpc.Dial(fmt.Sprintf("%s:%s", gcp_cloud_task_host, gcp_cloud_task_port), grpc.WithInsecure())
		clientOpt := option.WithGRPCConn(conn)
		client, err = cloudtasks.NewClient(context.Background(), clientOpt)
	}

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
	log.Printf("Client INFO: %v/n", client)
	log.Printf("Task Request: %v/n", req)

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
