package sample

import (
	sample "github.com/manhrev/runtracking/sample/pkg/api"
)

func NewServer() sample.SampleServer {
	return &sampleServer{}
}

type sampleServer struct {
	// Other service client connection, db adapter go here
	sample.UnimplementedSampleServer
}
