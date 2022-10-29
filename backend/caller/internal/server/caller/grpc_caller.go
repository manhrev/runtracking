package caller

import (
	caller "github.com/manhrev/runtracking/backend/caller/pkg/api"
)

func NewServer() caller.CallerServer {
	return &callerServer{}
}

type callerServer struct {
	// Other service client connection, db adapter go here
	caller.UnimplementedCallerServer
}
