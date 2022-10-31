package caller

import (
	"context"
	"log"

	caller "github.com/manhrev/runtracking/backend/caller/pkg/api"
	sample "github.com/manhrev/runtracking/backend/sample/pkg/api"
	"google.golang.org/grpc/metadata"
)

func (s *callerServer) CallSample(ctx context.Context, request *caller.CallSampleRequest) (*caller.CallSampleReply, error) {

	log.Println(Get(ctx, "UserID"))

	res, err := s.sampleClient.Reverse(ctx, &sample.ReversRequest{
		Num: request.GetNum(),
	})
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
