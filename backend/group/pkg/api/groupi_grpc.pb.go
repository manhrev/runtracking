// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.4
// source: api/groupi.proto

package group

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// GroupIClient is the client API for GroupI service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type GroupIClient interface {
	UpdateChallengeProgress(ctx context.Context, in *UpdateChallengeProgressRequest, opts ...grpc.CallOption) (*UpdateChallengeProgressReply, error)
	// for intermediary, cloud schedule check daily progress -> call intermediary -> call groupi
	CheckDailyProgressChallenge(ctx context.Context, in *CheckDailyProgressChallengeRequest, opts ...grpc.CallOption) (*CheckDailyProgressChallengeReply, error)
	CheckDailyProgressSeason(ctx context.Context, in *CheckDailyProgressSeasonRequest, opts ...grpc.CallOption) (*CheckDailyProgressSeasonReply, error)
}

type groupIClient struct {
	cc grpc.ClientConnInterface
}

func NewGroupIClient(cc grpc.ClientConnInterface) GroupIClient {
	return &groupIClient{cc}
}

func (c *groupIClient) UpdateChallengeProgress(ctx context.Context, in *UpdateChallengeProgressRequest, opts ...grpc.CallOption) (*UpdateChallengeProgressReply, error) {
	out := new(UpdateChallengeProgressReply)
	err := c.cc.Invoke(ctx, "/group.GroupI/UpdateChallengeProgress", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *groupIClient) CheckDailyProgressChallenge(ctx context.Context, in *CheckDailyProgressChallengeRequest, opts ...grpc.CallOption) (*CheckDailyProgressChallengeReply, error) {
	out := new(CheckDailyProgressChallengeReply)
	err := c.cc.Invoke(ctx, "/group.GroupI/CheckDailyProgressChallenge", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *groupIClient) CheckDailyProgressSeason(ctx context.Context, in *CheckDailyProgressSeasonRequest, opts ...grpc.CallOption) (*CheckDailyProgressSeasonReply, error) {
	out := new(CheckDailyProgressSeasonReply)
	err := c.cc.Invoke(ctx, "/group.GroupI/CheckDailyProgressSeason", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// GroupIServer is the server API for GroupI service.
// All implementations must embed UnimplementedGroupIServer
// for forward compatibility
type GroupIServer interface {
	UpdateChallengeProgress(context.Context, *UpdateChallengeProgressRequest) (*UpdateChallengeProgressReply, error)
	// for intermediary, cloud schedule check daily progress -> call intermediary -> call groupi
	CheckDailyProgressChallenge(context.Context, *CheckDailyProgressChallengeRequest) (*CheckDailyProgressChallengeReply, error)
	CheckDailyProgressSeason(context.Context, *CheckDailyProgressSeasonRequest) (*CheckDailyProgressSeasonReply, error)
	mustEmbedUnimplementedGroupIServer()
}

// UnimplementedGroupIServer must be embedded to have forward compatible implementations.
type UnimplementedGroupIServer struct {
}

func (UnimplementedGroupIServer) UpdateChallengeProgress(context.Context, *UpdateChallengeProgressRequest) (*UpdateChallengeProgressReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateChallengeProgress not implemented")
}
func (UnimplementedGroupIServer) CheckDailyProgressChallenge(context.Context, *CheckDailyProgressChallengeRequest) (*CheckDailyProgressChallengeReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CheckDailyProgressChallenge not implemented")
}
func (UnimplementedGroupIServer) CheckDailyProgressSeason(context.Context, *CheckDailyProgressSeasonRequest) (*CheckDailyProgressSeasonReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CheckDailyProgressSeason not implemented")
}
func (UnimplementedGroupIServer) mustEmbedUnimplementedGroupIServer() {}

// UnsafeGroupIServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to GroupIServer will
// result in compilation errors.
type UnsafeGroupIServer interface {
	mustEmbedUnimplementedGroupIServer()
}

func RegisterGroupIServer(s grpc.ServiceRegistrar, srv GroupIServer) {
	s.RegisterService(&GroupI_ServiceDesc, srv)
}

func _GroupI_UpdateChallengeProgress_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateChallengeProgressRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GroupIServer).UpdateChallengeProgress(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/group.GroupI/UpdateChallengeProgress",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GroupIServer).UpdateChallengeProgress(ctx, req.(*UpdateChallengeProgressRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _GroupI_CheckDailyProgressChallenge_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CheckDailyProgressChallengeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GroupIServer).CheckDailyProgressChallenge(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/group.GroupI/CheckDailyProgressChallenge",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GroupIServer).CheckDailyProgressChallenge(ctx, req.(*CheckDailyProgressChallengeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _GroupI_CheckDailyProgressSeason_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CheckDailyProgressSeasonRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GroupIServer).CheckDailyProgressSeason(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/group.GroupI/CheckDailyProgressSeason",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GroupIServer).CheckDailyProgressSeason(ctx, req.(*CheckDailyProgressSeasonRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// GroupI_ServiceDesc is the grpc.ServiceDesc for GroupI service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var GroupI_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "group.GroupI",
	HandlerType: (*GroupIServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "UpdateChallengeProgress",
			Handler:    _GroupI_UpdateChallengeProgress_Handler,
		},
		{
			MethodName: "CheckDailyProgressChallenge",
			Handler:    _GroupI_CheckDailyProgressChallenge_Handler,
		},
		{
			MethodName: "CheckDailyProgressSeason",
			Handler:    _GroupI_CheckDailyProgressSeason_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "api/groupi.proto",
}
