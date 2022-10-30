package sample

import (
	sample "github.com/manhrev/runtracking/backend/sample/pkg/api"
	"github.com/manhrev/runtracking/backend/sample/pkg/ent"
)

func NewServer(entClient *ent.Client) sample.SampleServer {
	return &sampleServer{
		entClient: entClient,
	}
}

type sampleServer struct {
	entClient *ent.Client
	// Other service client connection, db adapter go here
	sample.UnimplementedSampleServer
}
