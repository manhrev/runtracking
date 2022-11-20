package caller

import (
	caller "github.com/manhrev/runtracking/backend/caller/pkg/api"
	sample "github.com/manhrev/runtracking/backend/sample/pkg/api"
)

func NewServer(sampleClient sample.SampleClient) caller.CallerServer {
	return &callerServer{
		sampleClient: sampleClient,
	}
}

type callerServer struct {
	// Other service client connection, db adapter go here
	sampleClient sample.SampleClient
	caller.UnimplementedCallerServer
}
