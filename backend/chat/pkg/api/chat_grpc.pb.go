// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.4
// source: api/chat.proto

package chat

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

// ChatClient is the client API for Chat service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ChatClient interface {
	GetHistoryChat(ctx context.Context, in *GetHistoryChatRequest, opts ...grpc.CallOption) (*GetHistoryChatReply, error)
	SendMessage(ctx context.Context, in *SendMessageRequest, opts ...grpc.CallOption) (*SendMessageReply, error)
	DeleteConversation(ctx context.Context, in *DeleteConversationRequest, opts ...grpc.CallOption) (*DeleteConversationReply, error)
	ListConversation(ctx context.Context, in *ListConversationRequest, opts ...grpc.CallOption) (*ListConversationReply, error)
}

type chatClient struct {
	cc grpc.ClientConnInterface
}

func NewChatClient(cc grpc.ClientConnInterface) ChatClient {
	return &chatClient{cc}
}

func (c *chatClient) GetHistoryChat(ctx context.Context, in *GetHistoryChatRequest, opts ...grpc.CallOption) (*GetHistoryChatReply, error) {
	out := new(GetHistoryChatReply)
	err := c.cc.Invoke(ctx, "/chat.Chat/GetHistoryChat", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *chatClient) SendMessage(ctx context.Context, in *SendMessageRequest, opts ...grpc.CallOption) (*SendMessageReply, error) {
	out := new(SendMessageReply)
	err := c.cc.Invoke(ctx, "/chat.Chat/SendMessage", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *chatClient) DeleteConversation(ctx context.Context, in *DeleteConversationRequest, opts ...grpc.CallOption) (*DeleteConversationReply, error) {
	out := new(DeleteConversationReply)
	err := c.cc.Invoke(ctx, "/chat.Chat/DeleteConversation", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *chatClient) ListConversation(ctx context.Context, in *ListConversationRequest, opts ...grpc.CallOption) (*ListConversationReply, error) {
	out := new(ListConversationReply)
	err := c.cc.Invoke(ctx, "/chat.Chat/ListConversation", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ChatServer is the server API for Chat service.
// All implementations must embed UnimplementedChatServer
// for forward compatibility
type ChatServer interface {
	GetHistoryChat(context.Context, *GetHistoryChatRequest) (*GetHistoryChatReply, error)
	SendMessage(context.Context, *SendMessageRequest) (*SendMessageReply, error)
	DeleteConversation(context.Context, *DeleteConversationRequest) (*DeleteConversationReply, error)
	ListConversation(context.Context, *ListConversationRequest) (*ListConversationReply, error)
	mustEmbedUnimplementedChatServer()
}

// UnimplementedChatServer must be embedded to have forward compatible implementations.
type UnimplementedChatServer struct {
}

func (UnimplementedChatServer) GetHistoryChat(context.Context, *GetHistoryChatRequest) (*GetHistoryChatReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetHistoryChat not implemented")
}
func (UnimplementedChatServer) SendMessage(context.Context, *SendMessageRequest) (*SendMessageReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SendMessage not implemented")
}
func (UnimplementedChatServer) DeleteConversation(context.Context, *DeleteConversationRequest) (*DeleteConversationReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteConversation not implemented")
}
func (UnimplementedChatServer) ListConversation(context.Context, *ListConversationRequest) (*ListConversationReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListConversation not implemented")
}
func (UnimplementedChatServer) mustEmbedUnimplementedChatServer() {}

// UnsafeChatServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ChatServer will
// result in compilation errors.
type UnsafeChatServer interface {
	mustEmbedUnimplementedChatServer()
}

func RegisterChatServer(s grpc.ServiceRegistrar, srv ChatServer) {
	s.RegisterService(&Chat_ServiceDesc, srv)
}

func _Chat_GetHistoryChat_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetHistoryChatRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ChatServer).GetHistoryChat(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chat.Chat/GetHistoryChat",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ChatServer).GetHistoryChat(ctx, req.(*GetHistoryChatRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Chat_SendMessage_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SendMessageRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ChatServer).SendMessage(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chat.Chat/SendMessage",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ChatServer).SendMessage(ctx, req.(*SendMessageRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Chat_DeleteConversation_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteConversationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ChatServer).DeleteConversation(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chat.Chat/DeleteConversation",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ChatServer).DeleteConversation(ctx, req.(*DeleteConversationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Chat_ListConversation_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListConversationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ChatServer).ListConversation(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chat.Chat/ListConversation",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ChatServer).ListConversation(ctx, req.(*ListConversationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Chat_ServiceDesc is the grpc.ServiceDesc for Chat service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Chat_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "chat.Chat",
	HandlerType: (*ChatServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetHistoryChat",
			Handler:    _Chat_GetHistoryChat_Handler,
		},
		{
			MethodName: "SendMessage",
			Handler:    _Chat_SendMessage_Handler,
		},
		{
			MethodName: "DeleteConversation",
			Handler:    _Chat_DeleteConversation_Handler,
		},
		{
			MethodName: "ListConversation",
			Handler:    _Chat_ListConversation_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "api/chat.proto",
}
