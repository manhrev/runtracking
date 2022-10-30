package caller

import (
	"context"
	"log"

	caller "github.com/manhrev/runtracking/backend/caller/pkg/api"
	sample "github.com/manhrev/runtracking/backend/sample/pkg/api"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/metadata"
)

func (s *callerServer) CallSample(ctx context.Context, request *caller.CallSampleRequest) (*caller.CallSampleReply, error) {

	log.Println(Get(ctx, "UserID"))
	conn, err := grpc.Dial("sample:8080", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		return nil, err
	}

	client := sample.NewSampleClient(conn)
	res, err := client.Reverse(ctx, &sample.ReversRequest{Num: request.GetNum()})
	if err != nil {
		return nil, err
	}

	return &caller.CallSampleReply{Rev: res.GetRev()}, nil
}

func Get(ctx context.Context, name string) []string {
	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return nil
	}

	return md.Get(name)
}
