package authz

import (
	"context"

	corev3 "github.com/envoyproxy/go-control-plane/envoy/config/core/v3"
	authv3 "github.com/envoyproxy/go-control-plane/envoy/service/auth/v3"

	//typev3 "github.com/envoyproxy/go-control-plane/envoy/type/v3"
	"github.com/gogo/googleapis/google/rpc"
	"google.golang.org/genproto/googleapis/rpc/status"
	"google.golang.org/protobuf/types/known/wrapperspb"
)

type authZServer struct {
}

func NewServer() authv3.AuthorizationServer {
	return &authZServer{}
}

func (s *authZServer) Check(ctx context.Context, req *authv3.CheckRequest) (*authv3.CheckResponse, error) {
	// authorization := req.Attributes.Request.Http.Headers["authorization"]
	// if authorization != "token" {
	// 	return &authv3.CheckResponse{
	// 		HttpResponse: &authv3.CheckResponse_DeniedResponse{
	// 			DeniedResponse: &authv3.DeniedHttpResponse{
	// 				Status: &typev3.HttpStatus{
	// 					Code: typev3.StatusCode_Unauthorized,
	// 				},
	// 			},
	// 		}, Status: &status.Status{
	// 			Code: int32(rpc.UNAUTHENTICATED),
	// 		},
	// 	}, nil
	// }
	headers := []*corev3.HeaderValueOption{
		{
			Append: &wrapperspb.BoolValue{Value: false},
			Header: &corev3.HeaderValue{
				Key:   "UserID",
				Value: "1",
			},
		},
	}
	return &authv3.CheckResponse{
		HttpResponse: &authv3.CheckResponse_OkResponse{
			OkResponse: &authv3.OkHttpResponse{
				Headers: headers,
			},
		},
		Status: &status.Status{
			Code: int32(rpc.OK),
		},
	}, nil
}
