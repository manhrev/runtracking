// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.19.4
// source: api/notification.proto

package notification

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Notify struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Messeage      string                 `protobuf:"bytes,1,opt,name=messeage,proto3" json:"messeage,omitempty"`
	ScheduledTime *timestamppb.Timestamp `protobuf:"bytes,2,opt,name=scheduled_time,json=scheduledTime,proto3" json:"scheduled_time,omitempty"`
}

func (x *Notify) Reset() {
	*x = Notify{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_notification_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Notify) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Notify) ProtoMessage() {}

func (x *Notify) ProtoReflect() protoreflect.Message {
	mi := &file_api_notification_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Notify.ProtoReflect.Descriptor instead.
func (*Notify) Descriptor() ([]byte, []int) {
	return file_api_notification_proto_rawDescGZIP(), []int{0}
}

func (x *Notify) GetMesseage() string {
	if x != nil {
		return x.Messeage
	}
	return ""
}

func (x *Notify) GetScheduledTime() *timestamppb.Timestamp {
	if x != nil {
		return x.ScheduledTime
	}
	return nil
}

type PushNoti2AllUsersRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Notify *Notify `protobuf:"bytes,1,opt,name=notify,proto3" json:"notify,omitempty"`
}

func (x *PushNoti2AllUsersRequest) Reset() {
	*x = PushNoti2AllUsersRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_notification_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PushNoti2AllUsersRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PushNoti2AllUsersRequest) ProtoMessage() {}

func (x *PushNoti2AllUsersRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_notification_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PushNoti2AllUsersRequest.ProtoReflect.Descriptor instead.
func (*PushNoti2AllUsersRequest) Descriptor() ([]byte, []int) {
	return file_api_notification_proto_rawDescGZIP(), []int{1}
}

func (x *PushNoti2AllUsersRequest) GetNotify() *Notify {
	if x != nil {
		return x.Notify
	}
	return nil
}

type PushNoti2MembersOfGroupRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *PushNoti2MembersOfGroupRequest) Reset() {
	*x = PushNoti2MembersOfGroupRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_notification_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PushNoti2MembersOfGroupRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PushNoti2MembersOfGroupRequest) ProtoMessage() {}

func (x *PushNoti2MembersOfGroupRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_notification_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PushNoti2MembersOfGroupRequest.ProtoReflect.Descriptor instead.
func (*PushNoti2MembersOfGroupRequest) Descriptor() ([]byte, []int) {
	return file_api_notification_proto_rawDescGZIP(), []int{2}
}

type PushNoti2UserRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *PushNoti2UserRequest) Reset() {
	*x = PushNoti2UserRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_notification_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PushNoti2UserRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PushNoti2UserRequest) ProtoMessage() {}

func (x *PushNoti2UserRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_notification_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PushNoti2UserRequest.ProtoReflect.Descriptor instead.
func (*PushNoti2UserRequest) Descriptor() ([]byte, []int) {
	return file_api_notification_proto_rawDescGZIP(), []int{3}
}

var File_api_notification_proto protoreflect.FileDescriptor

var file_api_notification_proto_rawDesc = []byte{
	0x0a, 0x16, 0x61, 0x70, 0x69, 0x2f, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0c, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69,
	0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d,
	0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1b, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x22, 0x67, 0x0a, 0x06, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x79, 0x12, 0x1a,
	0x0a, 0x08, 0x6d, 0x65, 0x73, 0x73, 0x65, 0x61, 0x67, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x08, 0x6d, 0x65, 0x73, 0x73, 0x65, 0x61, 0x67, 0x65, 0x12, 0x41, 0x0a, 0x0e, 0x73, 0x63,
	0x68, 0x65, 0x64, 0x75, 0x6c, 0x65, 0x64, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x0d,
	0x73, 0x63, 0x68, 0x65, 0x64, 0x75, 0x6c, 0x65, 0x64, 0x54, 0x69, 0x6d, 0x65, 0x22, 0x48, 0x0a,
	0x18, 0x50, 0x75, 0x73, 0x68, 0x4e, 0x6f, 0x74, 0x69, 0x32, 0x41, 0x6c, 0x6c, 0x55, 0x73, 0x65,
	0x72, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x2c, 0x0a, 0x06, 0x6e, 0x6f, 0x74,
	0x69, 0x66, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x14, 0x2e, 0x6e, 0x6f, 0x74, 0x69,
	0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x79, 0x52,
	0x06, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x79, 0x22, 0x20, 0x0a, 0x1e, 0x50, 0x75, 0x73, 0x68, 0x4e,
	0x6f, 0x74, 0x69, 0x32, 0x4d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73, 0x4f, 0x66, 0x47, 0x72, 0x6f,
	0x75, 0x70, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22, 0x16, 0x0a, 0x14, 0x50, 0x75, 0x73,
	0x68, 0x4e, 0x6f, 0x74, 0x69, 0x32, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x32, 0x97, 0x02, 0x0a, 0x0c, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x12, 0x55, 0x0a, 0x11, 0x50, 0x75, 0x73, 0x68, 0x4e, 0x6f, 0x74, 0x69, 0x32, 0x41,
	0x6c, 0x6c, 0x55, 0x73, 0x65, 0x72, 0x73, 0x12, 0x26, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69,
	0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x50, 0x75, 0x73, 0x68, 0x4e, 0x6f, 0x74, 0x69, 0x32,
	0x41, 0x6c, 0x6c, 0x55, 0x73, 0x65, 0x72, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x22, 0x00, 0x12, 0x61, 0x0a, 0x17, 0x50, 0x75, 0x73,
	0x68, 0x4e, 0x6f, 0x74, 0x69, 0x32, 0x4d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73, 0x4f, 0x66, 0x47,
	0x72, 0x6f, 0x75, 0x70, 0x12, 0x2c, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x2e, 0x50, 0x75, 0x73, 0x68, 0x4e, 0x6f, 0x74, 0x69, 0x32, 0x4d, 0x65, 0x6d,
	0x62, 0x65, 0x72, 0x73, 0x4f, 0x66, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x22, 0x00, 0x12, 0x4d, 0x0a, 0x0d,
	0x50, 0x75, 0x73, 0x68, 0x4e, 0x6f, 0x74, 0x69, 0x32, 0x55, 0x73, 0x65, 0x72, 0x12, 0x22, 0x2e,
	0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x50, 0x75, 0x73,
	0x68, 0x4e, 0x6f, 0x74, 0x69, 0x32, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x22, 0x00, 0x42, 0x43, 0x5a, 0x41, 0x67,
	0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x61, 0x6e, 0x68, 0x72, 0x65,
	0x76, 0x2f, 0x72, 0x75, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x69, 0x6e, 0x67, 0x2f, 0x62, 0x61,
	0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2f, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x2f, 0x70, 0x6b, 0x67, 0x2f,
	0x61, 0x70, 0x69, 0x3b, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_api_notification_proto_rawDescOnce sync.Once
	file_api_notification_proto_rawDescData = file_api_notification_proto_rawDesc
)

func file_api_notification_proto_rawDescGZIP() []byte {
	file_api_notification_proto_rawDescOnce.Do(func() {
		file_api_notification_proto_rawDescData = protoimpl.X.CompressGZIP(file_api_notification_proto_rawDescData)
	})
	return file_api_notification_proto_rawDescData
}

var file_api_notification_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_api_notification_proto_goTypes = []interface{}{
	(*Notify)(nil),                         // 0: notification.Notify
	(*PushNoti2AllUsersRequest)(nil),       // 1: notification.PushNoti2AllUsersRequest
	(*PushNoti2MembersOfGroupRequest)(nil), // 2: notification.PushNoti2MembersOfGroupRequest
	(*PushNoti2UserRequest)(nil),           // 3: notification.PushNoti2UserRequest
	(*timestamppb.Timestamp)(nil),          // 4: google.protobuf.Timestamp
	(*emptypb.Empty)(nil),                  // 5: google.protobuf.Empty
}
var file_api_notification_proto_depIdxs = []int32{
	4, // 0: notification.Notify.scheduled_time:type_name -> google.protobuf.Timestamp
	0, // 1: notification.PushNoti2AllUsersRequest.notify:type_name -> notification.Notify
	1, // 2: notification.Notification.PushNoti2AllUsers:input_type -> notification.PushNoti2AllUsersRequest
	2, // 3: notification.Notification.PushNoti2MembersOfGroup:input_type -> notification.PushNoti2MembersOfGroupRequest
	3, // 4: notification.Notification.PushNoti2User:input_type -> notification.PushNoti2UserRequest
	5, // 5: notification.Notification.PushNoti2AllUsers:output_type -> google.protobuf.Empty
	5, // 6: notification.Notification.PushNoti2MembersOfGroup:output_type -> google.protobuf.Empty
	5, // 7: notification.Notification.PushNoti2User:output_type -> google.protobuf.Empty
	5, // [5:8] is the sub-list for method output_type
	2, // [2:5] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_api_notification_proto_init() }
func file_api_notification_proto_init() {
	if File_api_notification_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_api_notification_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Notify); i {
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
		file_api_notification_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PushNoti2AllUsersRequest); i {
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
		file_api_notification_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PushNoti2MembersOfGroupRequest); i {
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
		file_api_notification_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PushNoti2UserRequest); i {
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
			RawDescriptor: file_api_notification_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_api_notification_proto_goTypes,
		DependencyIndexes: file_api_notification_proto_depIdxs,
		MessageInfos:      file_api_notification_proto_msgTypes,
	}.Build()
	File_api_notification_proto = out.File
	file_api_notification_proto_rawDesc = nil
	file_api_notification_proto_goTypes = nil
	file_api_notification_proto_depIdxs = nil
}
