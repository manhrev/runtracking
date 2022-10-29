package sample

import (
	sample "github.com/manhrev/runtracking/backend/sample/pkg/api"
)

func NewServer() sample.SampleServer {
	return &sampleServer{}
}

type sampleServer struct {
	// Other service client connection, db adapter go here
	sample.UnimplementedSampleServer
}
