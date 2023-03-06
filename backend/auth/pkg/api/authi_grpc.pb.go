// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.4
// source: api/authi.proto

package auth

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// AuthIClient is the client API for AuthI service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AuthIClient interface {
	GetAllUsers(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*GetAllUsersReply, error)
	GetUserByIds(ctx context.Context, in *GetByIdsRequest, opts ...grpc.CallOption) (*GetAllUsersReply, error)
}

type authIClient struct {
	cc grpc.ClientConnInterface
}

func NewAuthIClient(cc grpc.ClientConnInterface) AuthIClient {
	return &authIClient{cc}
}

func (c *authIClient) GetAllUsers(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*GetAllUsersReply, error) {
	out := new(GetAllUsersReply)
	err := c.cc.Invoke(ctx, "/auth.AuthI/GetAllUsers", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authIClient) GetUserByIds(ctx context.Context, in *GetByIdsRequest, opts ...grpc.CallOption) (*GetAllUsersReply, error) {
	out := new(GetAllUsersReply)
	err := c.cc.Invoke(ctx, "/auth.AuthI/GetUserByIds", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AuthIServer is the server API for AuthI service.
// All implementations must embed UnimplementedAuthIServer
// for forward compatibility
type AuthIServer interface {
	GetAllUsers(context.Context, *emptypb.Empty) (*GetAllUsersReply, error)
	GetUserByIds(context.Context, *GetByIdsRequest) (*GetAllUsersReply, error)
	mustEmbedUnimplementedAuthIServer()
}

// UnimplementedAuthIServer must be embedded to have forward compatible implementations.
type UnimplementedAuthIServer struct {
}

func (UnimplementedAuthIServer) GetAllUsers(context.Context, *emptypb.Empty) (*GetAllUsersReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAllUsers not implemented")
}
func (UnimplementedAuthIServer) GetUserByIds(context.Context, *GetByIdsRequest) (*GetAllUsersReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetUserByIds not implemented")
}
func (UnimplementedAuthIServer) mustEmbedUnimplementedAuthIServer() {}

// UnsafeAuthIServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AuthIServer will
// result in compilation errors.
type UnsafeAuthIServer interface {
	mustEmbedUnimplementedAuthIServer()
}

func RegisterAuthIServer(s grpc.ServiceRegistrar, srv AuthIServer) {
	s.RegisterService(&AuthI_ServiceDesc, srv)
}

func _AuthI_GetAllUsers_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthIServer).GetAllUsers(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/auth.AuthI/GetAllUsers",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthIServer).GetAllUsers(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthI_GetUserByIds_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetByIdsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthIServer).GetUserByIds(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/auth.AuthI/GetUserByIds",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthIServer).GetUserByIds(ctx, req.(*GetByIdsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// AuthI_ServiceDesc is the grpc.ServiceDesc for AuthI service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AuthI_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "auth.AuthI",
	HandlerType: (*AuthIServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetAllUsers",
			Handler:    _AuthI_GetAllUsers_Handler,
		},
		{
			MethodName: "GetUserByIds",
			Handler:    _AuthI_GetUserByIds_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "api/authi.proto",
}
