package caller

import (
	"context"

	sample "github.com/manhrev/runtracking/backend/sample/pkg/api"
	"google.golang.org/grpc/credentials/insecure"
	caller "github.com/manhrev/runtracking/backend/caller/pkg/api"
	"google.golang.org/grpc"
)

func (s *callerServer) CallSample(ctx context.Context, request *caller.CallSampleRequest) (*caller.CallSampleReply, error) {
	conn, err := grpc.Dial("sample:8080", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		return nil, err
	}
	
	client := sample.NewSampleClient(conn)
	res, err := client.Reverse(ctx, &sample.ReversRequest{Num: 12})
	if err != nil {
		return nil, err
	}

	return &caller.CallSampleReply{Rev: res.GetRev()}, nil
}
