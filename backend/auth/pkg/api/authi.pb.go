// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.19.4
// source: api/authi.proto

package auth

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type GetAllUsersReply struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Users []*UserInfo `protobuf:"bytes,1,rep,name=users,proto3" json:"users,omitempty"`
}

func (x *GetAllUsersReply) Reset() {
	*x = GetAllUsersReply{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_authi_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetAllUsersReply) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetAllUsersReply) ProtoMessage() {}

func (x *GetAllUsersReply) ProtoReflect() protoreflect.Message {
	mi := &file_api_authi_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetAllUsersReply.ProtoReflect.Descriptor instead.
func (*GetAllUsersReply) Descriptor() ([]byte, []int) {
	return file_api_authi_proto_rawDescGZIP(), []int{0}
}

func (x *GetAllUsersReply) GetUsers() []*UserInfo {
	if x != nil {
		return x.Users
	}
	return nil
}

type GetByIdsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Ids []int64 `protobuf:"varint,1,rep,packed,name=ids,proto3" json:"ids,omitempty"`
}

func (x *GetByIdsRequest) Reset() {
	*x = GetByIdsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_authi_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetByIdsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetByIdsRequest) ProtoMessage() {}

func (x *GetByIdsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_authi_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetByIdsRequest.ProtoReflect.Descriptor instead.
func (*GetByIdsRequest) Descriptor() ([]byte, []int) {
	return file_api_authi_proto_rawDescGZIP(), []int{1}
}

func (x *GetByIdsRequest) GetIds() []int64 {
	if x != nil {
		return x.Ids
	}
	return nil
}

var File_api_authi_proto protoreflect.FileDescriptor

var file_api_authi_proto_rawDesc = []byte{
	0x0a, 0x0f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x75, 0x74, 0x68, 0x69, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x04, 0x61, 0x75, 0x74, 0x68, 0x1a, 0x1b, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0e, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x22, 0x38, 0x0a, 0x10, 0x47, 0x65, 0x74, 0x41, 0x6c, 0x6c, 0x55, 0x73,
	0x65, 0x72, 0x73, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x12, 0x24, 0x0a, 0x05, 0x75, 0x73, 0x65, 0x72,
	0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x55,
	0x73, 0x65, 0x72, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x05, 0x75, 0x73, 0x65, 0x72, 0x73, 0x22, 0x23,
	0x0a, 0x0f, 0x47, 0x65, 0x74, 0x42, 0x79, 0x49, 0x64, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x12, 0x10, 0x0a, 0x03, 0x69, 0x64, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x03, 0x52, 0x03,
	0x69, 0x64, 0x73, 0x32, 0x8a, 0x01, 0x0a, 0x05, 0x41, 0x75, 0x74, 0x68, 0x49, 0x12, 0x3f, 0x0a,
	0x0b, 0x47, 0x65, 0x74, 0x41, 0x6c, 0x6c, 0x55, 0x73, 0x65, 0x72, 0x73, 0x12, 0x16, 0x2e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45,
	0x6d, 0x70, 0x74, 0x79, 0x1a, 0x16, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x47, 0x65, 0x74, 0x41,
	0x6c, 0x6c, 0x55, 0x73, 0x65, 0x72, 0x73, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x22, 0x00, 0x12, 0x40,
	0x0a, 0x0d, 0x47, 0x65, 0x74, 0x55, 0x73, 0x65, 0x72, 0x73, 0x42, 0x79, 0x49, 0x64, 0x73, 0x12,
	0x15, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x47, 0x65, 0x74, 0x42, 0x79, 0x49, 0x64, 0x73, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x16, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x47, 0x65,
	0x74, 0x41, 0x6c, 0x6c, 0x55, 0x73, 0x65, 0x72, 0x73, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x22, 0x00,
	0x42, 0x3a, 0x5a, 0x38, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d,
	0x61, 0x6e, 0x68, 0x72, 0x65, 0x76, 0x2f, 0x72, 0x75, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x69,
	0x6e, 0x67, 0x2f, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2f, 0x61, 0x75, 0x74, 0x68, 0x2f,
	0x70, 0x6b, 0x67, 0x2f, 0x61, 0x70, 0x69, 0x3b, 0x61, 0x75, 0x74, 0x68, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_api_authi_proto_rawDescOnce sync.Once
	file_api_authi_proto_rawDescData = file_api_authi_proto_rawDesc
)

func file_api_authi_proto_rawDescGZIP() []byte {
	file_api_authi_proto_rawDescOnce.Do(func() {
		file_api_authi_proto_rawDescData = protoimpl.X.CompressGZIP(file_api_authi_proto_rawDescData)
	})
	return file_api_authi_proto_rawDescData
}

var file_api_authi_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_api_authi_proto_goTypes = []interface{}{
	(*GetAllUsersReply)(nil), // 0: auth.GetAllUsersReply
	(*GetByIdsRequest)(nil),  // 1: auth.GetByIdsRequest
	(*UserInfo)(nil),         // 2: auth.UserInfo
	(*emptypb.Empty)(nil),    // 3: google.protobuf.Empty
}
var file_api_authi_proto_depIdxs = []int32{
	2, // 0: auth.GetAllUsersReply.users:type_name -> auth.UserInfo
	3, // 1: auth.AuthI.GetAllUsers:input_type -> google.protobuf.Empty
	1, // 2: auth.AuthI.GetUsersByIds:input_type -> auth.GetByIdsRequest
	0, // 3: auth.AuthI.GetAllUsers:output_type -> auth.GetAllUsersReply
	0, // 4: auth.AuthI.GetUsersByIds:output_type -> auth.GetAllUsersReply
	3, // [3:5] is the sub-list for method output_type
	1, // [1:3] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_api_authi_proto_init() }
func file_api_authi_proto_init() {
	if File_api_authi_proto != nil {
		return
	}
	file_api_auth_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_api_authi_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetAllUsersReply); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_api_authi_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetByIdsRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_api_authi_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_api_authi_proto_goTypes,
		DependencyIndexes: file_api_authi_proto_depIdxs,
		MessageInfos:      file_api_authi_proto_msgTypes,
	}.Build()
	File_api_authi_proto = out.File
	file_api_authi_proto_rawDesc = nil
	file_api_authi_proto_goTypes = nil
	file_api_authi_proto_depIdxs = nil
}
