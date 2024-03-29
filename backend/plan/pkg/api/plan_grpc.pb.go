// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.4
// source: api/plan.proto

package plan

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

// PlanClient is the client API for Plan service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PlanClient interface {
	// plan
	CreatePlan(ctx context.Context, in *CreatePlanRequest, opts ...grpc.CallOption) (*CreatePlanReply, error)
	ListPlan(ctx context.Context, in *ListPlanRequest, opts ...grpc.CallOption) (*ListPlanReply, error)
	DeletePlans(ctx context.Context, in *DeletePlansRequest, opts ...grpc.CallOption) (*DeletePlansReply, error)
	UpdatePlan(ctx context.Context, in *UpdatePlanRequest, opts ...grpc.CallOption) (*UpdatePlanReply, error)
}

type planClient struct {
	cc grpc.ClientConnInterface
}

func NewPlanClient(cc grpc.ClientConnInterface) PlanClient {
	return &planClient{cc}
}

func (c *planClient) CreatePlan(ctx context.Context, in *CreatePlanRequest, opts ...grpc.CallOption) (*CreatePlanReply, error) {
	out := new(CreatePlanReply)
	err := c.cc.Invoke(ctx, "/plan.Plan/CreatePlan", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *planClient) ListPlan(ctx context.Context, in *ListPlanRequest, opts ...grpc.CallOption) (*ListPlanReply, error) {
	out := new(ListPlanReply)
	err := c.cc.Invoke(ctx, "/plan.Plan/ListPlan", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *planClient) DeletePlans(ctx context.Context, in *DeletePlansRequest, opts ...grpc.CallOption) (*DeletePlansReply, error) {
	out := new(DeletePlansReply)
	err := c.cc.Invoke(ctx, "/plan.Plan/DeletePlans", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *planClient) UpdatePlan(ctx context.Context, in *UpdatePlanRequest, opts ...grpc.CallOption) (*UpdatePlanReply, error) {
	out := new(UpdatePlanReply)
	err := c.cc.Invoke(ctx, "/plan.Plan/UpdatePlan", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PlanServer is the server API for Plan service.
// All implementations must embed UnimplementedPlanServer
// for forward compatibility
type PlanServer interface {
	// plan
	CreatePlan(context.Context, *CreatePlanRequest) (*CreatePlanReply, error)
	ListPlan(context.Context, *ListPlanRequest) (*ListPlanReply, error)
	DeletePlans(context.Context, *DeletePlansRequest) (*DeletePlansReply, error)
	UpdatePlan(context.Context, *UpdatePlanRequest) (*UpdatePlanReply, error)
	mustEmbedUnimplementedPlanServer()
}

// UnimplementedPlanServer must be embedded to have forward compatible implementations.
type UnimplementedPlanServer struct {
}

func (UnimplementedPlanServer) CreatePlan(context.Context, *CreatePlanRequest) (*CreatePlanReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreatePlan not implemented")
}
func (UnimplementedPlanServer) ListPlan(context.Context, *ListPlanRequest) (*ListPlanReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListPlan not implemented")
}
func (UnimplementedPlanServer) DeletePlans(context.Context, *DeletePlansRequest) (*DeletePlansReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeletePlans not implemented")
}
func (UnimplementedPlanServer) UpdatePlan(context.Context, *UpdatePlanRequest) (*UpdatePlanReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdatePlan not implemented")
}
func (UnimplementedPlanServer) mustEmbedUnimplementedPlanServer() {}

// UnsafePlanServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PlanServer will
// result in compilation errors.
type UnsafePlanServer interface {
	mustEmbedUnimplementedPlanServer()
}

func RegisterPlanServer(s grpc.ServiceRegistrar, srv PlanServer) {
	s.RegisterService(&Plan_ServiceDesc, srv)
}

func _Plan_CreatePlan_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreatePlanRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PlanServer).CreatePlan(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/plan.Plan/CreatePlan",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PlanServer).CreatePlan(ctx, req.(*CreatePlanRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Plan_ListPlan_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListPlanRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PlanServer).ListPlan(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/plan.Plan/ListPlan",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PlanServer).ListPlan(ctx, req.(*ListPlanRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Plan_DeletePlans_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeletePlansRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PlanServer).DeletePlans(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/plan.Plan/DeletePlans",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PlanServer).DeletePlans(ctx, req.(*DeletePlansRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Plan_UpdatePlan_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdatePlanRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PlanServer).UpdatePlan(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/plan.Plan/UpdatePlan",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PlanServer).UpdatePlan(ctx, req.(*UpdatePlanRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Plan_ServiceDesc is the grpc.ServiceDesc for Plan service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Plan_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "plan.Plan",
	HandlerType: (*PlanServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreatePlan",
			Handler:    _Plan_CreatePlan_Handler,
		},
		{
			MethodName: "ListPlan",
			Handler:    _Plan_ListPlan_Handler,
		},
		{
			MethodName: "DeletePlans",
			Handler:    _Plan_DeletePlans_Handler,
		},
		{
			MethodName: "UpdatePlan",
			Handler:    _Plan_UpdatePlan_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "api/plan.proto",
}
