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

type NOTIFICATION_TYPE int32

const (
	NOTIFICATION_TYPE_ALLUSERS         NOTIFICATION_TYPE = 0
	NOTIFICATION_TYPE_MEMBERS_OF_GROUP NOTIFICATION_TYPE = 1
	NOTIFICATION_TYPE_GROUPS_OF_EVENT  NOTIFICATION_TYPE = 2
	NOTIFICATION_TYPE_ONLYUSER         NOTIFICATION_TYPE = 3
)

// Enum value maps for NOTIFICATION_TYPE.
var (
	NOTIFICATION_TYPE_name = map[int32]string{
		0: "ALLUSERS",
		1: "MEMBERS_OF_GROUP",
		2: "GROUPS_OF_EVENT",
		3: "ONLYUSER",
	}
	NOTIFICATION_TYPE_value = map[string]int32{
		"ALLUSERS":         0,
		"MEMBERS_OF_GROUP": 1,
		"GROUPS_OF_EVENT":  2,
		"ONLYUSER":         3,
	}
)

func (x NOTIFICATION_TYPE) Enum() *NOTIFICATION_TYPE {
	p := new(NOTIFICATION_TYPE)
	*p = x
	return p
}

func (x NOTIFICATION_TYPE) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (NOTIFICATION_TYPE) Descriptor() protoreflect.EnumDescriptor {
	return file_api_notification_proto_enumTypes[0].Descriptor()
}

func (NOTIFICATION_TYPE) Type() protoreflect.EnumType {
	return &file_api_notification_proto_enumTypes[0]
}

func (x NOTIFICATION_TYPE) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use NOTIFICATION_TYPE.Descriptor instead.
func (NOTIFICATION_TYPE) EnumDescriptor() ([]byte, []int) {
	return file_api_notification_proto_rawDescGZIP(), []int{0}
}

type UpdateNotificationInfoRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id     int64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	IsSeen bool  `protobuf:"varint,2,opt,name=is_seen,json=isSeen,proto3" json:"is_seen,omitempty"`
}

func (x *UpdateNotificationInfoRequest) Reset() {
	*x = UpdateNotificationInfoRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_notification_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateNotificationInfoRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateNotificationInfoRequest) ProtoMessage() {}

func (x *UpdateNotificationInfoRequest) ProtoReflect() protoreflect.Message {
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

// Deprecated: Use UpdateNotificationInfoRequest.ProtoReflect.Descriptor instead.
func (*UpdateNotificationInfoRequest) Descriptor() ([]byte, []int) {
	return file_api_notification_proto_rawDescGZIP(), []int{0}
}

func (x *UpdateNotificationInfoRequest) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *UpdateNotificationInfoRequest) GetIsSeen() bool {
	if x != nil {
		return x.IsSeen
	}
	return false
}

type UpdateNotificationInfoReply struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	IdUpdated int64 `protobuf:"varint,1,opt,name=id_updated,json=idUpdated,proto3" json:"id_updated,omitempty"`
}

func (x *UpdateNotificationInfoReply) Reset() {
	*x = UpdateNotificationInfoReply{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_notification_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateNotificationInfoReply) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateNotificationInfoReply) ProtoMessage() {}

func (x *UpdateNotificationInfoReply) ProtoReflect() protoreflect.Message {
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

// Deprecated: Use UpdateNotificationInfoReply.ProtoReflect.Descriptor instead.
func (*UpdateNotificationInfoReply) Descriptor() ([]byte, []int) {
	return file_api_notification_proto_rawDescGZIP(), []int{1}
}

func (x *UpdateNotificationInfoReply) GetIdUpdated() int64 {
	if x != nil {
		return x.IdUpdated
	}
	return 0
}

type IdRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *IdRequest) Reset() {
	*x = IdRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_notification_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IdRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IdRequest) ProtoMessage() {}

func (x *IdRequest) ProtoReflect() protoreflect.Message {
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

// Deprecated: Use IdRequest.ProtoReflect.Descriptor instead.
func (*IdRequest) Descriptor() ([]byte, []int) {
	return file_api_notification_proto_rawDescGZIP(), []int{2}
}

func (x *IdRequest) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

type IdReply struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *IdReply) Reset() {
	*x = IdReply{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_notification_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IdReply) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IdReply) ProtoMessage() {}

func (x *IdReply) ProtoReflect() protoreflect.Message {
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

// Deprecated: Use IdReply.ProtoReflect.Descriptor instead.
func (*IdReply) Descriptor() ([]byte, []int) {
	return file_api_notification_proto_rawDescGZIP(), []int{3}
}

func (x *IdReply) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

type ExpoPushTokenRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserId        int64  `protobuf:"varint,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	ExpoPushToken string `protobuf:"bytes,2,opt,name=expo_push_token,json=expoPushToken,proto3" json:"expo_push_token,omitempty"`
}

func (x *ExpoPushTokenRequest) Reset() {
	*x = ExpoPushTokenRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_notification_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ExpoPushTokenRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ExpoPushTokenRequest) ProtoMessage() {}

func (x *ExpoPushTokenRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_notification_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ExpoPushTokenRequest.ProtoReflect.Descriptor instead.
func (*ExpoPushTokenRequest) Descriptor() ([]byte, []int) {
	return file_api_notification_proto_rawDescGZIP(), []int{4}
}

func (x *ExpoPushTokenRequest) GetUserId() int64 {
	if x != nil {
		return x.UserId
	}
	return 0
}

func (x *ExpoPushTokenRequest) GetExpoPushToken() string {
	if x != nil {
		return x.ExpoPushToken
	}
	return ""
}

type ListNotificationInfoReply struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	NotificationList []*NotificationInfo `protobuf:"bytes,1,rep,name=notification_list,json=notificationList,proto3" json:"notification_list,omitempty"`
	Total            int64               `protobuf:"varint,2,opt,name=total,proto3" json:"total,omitempty"`
}

func (x *ListNotificationInfoReply) Reset() {
	*x = ListNotificationInfoReply{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_notification_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListNotificationInfoReply) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListNotificationInfoReply) ProtoMessage() {}

func (x *ListNotificationInfoReply) ProtoReflect() protoreflect.Message {
	mi := &file_api_notification_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListNotificationInfoReply.ProtoReflect.Descriptor instead.
func (*ListNotificationInfoReply) Descriptor() ([]byte, []int) {
	return file_api_notification_proto_rawDescGZIP(), []int{5}
}

func (x *ListNotificationInfoReply) GetNotificationList() []*NotificationInfo {
	if x != nil {
		return x.NotificationList
	}
	return nil
}

func (x *ListNotificationInfoReply) GetTotal() int64 {
	if x != nil {
		return x.Total
	}
	return 0
}

type PushNotiRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Messeage      string                 `protobuf:"bytes,1,opt,name=messeage,proto3" json:"messeage,omitempty"`
	ScheduledTime *timestamppb.Timestamp `protobuf:"bytes,2,opt,name=scheduled_time,json=scheduledTime,proto3" json:"scheduled_time,omitempty"`
	Type          NOTIFICATION_TYPE      `protobuf:"varint,3,opt,name=type,proto3,enum=notification.NOTIFICATION_TYPE" json:"type,omitempty"`
	ReceivedId    int64                  `protobuf:"varint,4,opt,name=received_id,json=receivedId,proto3" json:"received_id,omitempty"`
}

func (x *PushNotiRequest) Reset() {
	*x = PushNotiRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_notification_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PushNotiRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PushNotiRequest) ProtoMessage() {}

func (x *PushNotiRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_notification_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PushNotiRequest.ProtoReflect.Descriptor instead.
func (*PushNotiRequest) Descriptor() ([]byte, []int) {
	return file_api_notification_proto_rawDescGZIP(), []int{6}
}

func (x *PushNotiRequest) GetMesseage() string {
	if x != nil {
		return x.Messeage
	}
	return ""
}

func (x *PushNotiRequest) GetScheduledTime() *timestamppb.Timestamp {
	if x != nil {
		return x.ScheduledTime
	}
	return nil
}

func (x *PushNotiRequest) GetType() NOTIFICATION_TYPE {
	if x != nil {
		return x.Type
	}
	return NOTIFICATION_TYPE_ALLUSERS
}

func (x *PushNotiRequest) GetReceivedId() int64 {
	if x != nil {
		return x.ReceivedId
	}
	return 0
}

type ListNotificationInfoRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Limit  uint32 `protobuf:"varint,1,opt,name=limit,proto3" json:"limit,omitempty"`
	Offset uint64 `protobuf:"varint,2,opt,name=offset,proto3" json:"offset,omitempty"`
}

func (x *ListNotificationInfoRequest) Reset() {
	*x = ListNotificationInfoRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_notification_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListNotificationInfoRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListNotificationInfoRequest) ProtoMessage() {}

func (x *ListNotificationInfoRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_notification_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListNotificationInfoRequest.ProtoReflect.Descriptor instead.
func (*ListNotificationInfoRequest) Descriptor() ([]byte, []int) {
	return file_api_notification_proto_rawDescGZIP(), []int{7}
}

func (x *ListNotificationInfoRequest) GetLimit() uint32 {
	if x != nil {
		return x.Limit
	}
	return 0
}

func (x *ListNotificationInfoRequest) GetOffset() uint64 {
	if x != nil {
		return x.Offset
	}
	return 0
}

type NotificationInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          int64                  `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Message     string                 `protobuf:"bytes,2,opt,name=message,proto3" json:"message,omitempty"`
	Type        NOTIFICATION_TYPE      `protobuf:"varint,3,opt,name=type,proto3,enum=notification.NOTIFICATION_TYPE" json:"type,omitempty"`
	ReferenceId int64                  `protobuf:"varint,6,opt,name=reference_id,json=referenceId,proto3" json:"reference_id,omitempty"`
	Image       string                 `protobuf:"bytes,7,opt,name=image,proto3" json:"image,omitempty"`
	IsSeen      bool                   `protobuf:"varint,4,opt,name=is_seen,json=isSeen,proto3" json:"is_seen,omitempty"`
	Time        *timestamppb.Timestamp `protobuf:"bytes,5,opt,name=time,proto3" json:"time,omitempty"`
}

func (x *NotificationInfo) Reset() {
	*x = NotificationInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_notification_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NotificationInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NotificationInfo) ProtoMessage() {}

func (x *NotificationInfo) ProtoReflect() protoreflect.Message {
	mi := &file_api_notification_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NotificationInfo.ProtoReflect.Descriptor instead.
func (*NotificationInfo) Descriptor() ([]byte, []int) {
	return file_api_notification_proto_rawDescGZIP(), []int{8}
}

func (x *NotificationInfo) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *NotificationInfo) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

func (x *NotificationInfo) GetType() NOTIFICATION_TYPE {
	if x != nil {
		return x.Type
	}
	return NOTIFICATION_TYPE_ALLUSERS
}

func (x *NotificationInfo) GetReferenceId() int64 {
	if x != nil {
		return x.ReferenceId
	}
	return 0
}

func (x *NotificationInfo) GetImage() string {
	if x != nil {
		return x.Image
	}
	return ""
}

func (x *NotificationInfo) GetIsSeen() bool {
	if x != nil {
		return x.IsSeen
	}
	return false
}

func (x *NotificationInfo) GetTime() *timestamppb.Timestamp {
	if x != nil {
		return x.Time
	}
	return nil
}

var File_api_notification_proto protoreflect.FileDescriptor

var file_api_notification_proto_rawDesc = []byte{
	0x0a, 0x16, 0x61, 0x70, 0x69, 0x2f, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0c, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69,
	0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d,
	0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1b, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x22, 0x48, 0x0a, 0x1d, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x4e, 0x6f,
	0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x17, 0x0a, 0x07, 0x69, 0x73, 0x5f, 0x73, 0x65, 0x65, 0x6e,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x69, 0x73, 0x53, 0x65, 0x65, 0x6e, 0x22, 0x3c,
	0x0a, 0x1b, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x12, 0x1d, 0x0a,
	0x0a, 0x69, 0x64, 0x5f, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x03, 0x52, 0x09, 0x69, 0x64, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x22, 0x1b, 0x0a, 0x09,
	0x49, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x22, 0x19, 0x0a, 0x07, 0x49, 0x64, 0x52,
	0x65, 0x70, 0x6c, 0x79, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03,
	0x52, 0x02, 0x69, 0x64, 0x22, 0x57, 0x0a, 0x14, 0x45, 0x78, 0x70, 0x6f, 0x50, 0x75, 0x73, 0x68,
	0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x17, 0x0a, 0x07,
	0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x06, 0x75,
	0x73, 0x65, 0x72, 0x49, 0x64, 0x12, 0x26, 0x0a, 0x0f, 0x65, 0x78, 0x70, 0x6f, 0x5f, 0x70, 0x75,
	0x73, 0x68, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d,
	0x65, 0x78, 0x70, 0x6f, 0x50, 0x75, 0x73, 0x68, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x22, 0x7e, 0x0a,
	0x19, 0x4c, 0x69, 0x73, 0x74, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x12, 0x4b, 0x0a, 0x11, 0x6e, 0x6f,
	0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x6c, 0x69, 0x73, 0x74, 0x18,
	0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x10, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x22, 0xc6, 0x01,
	0x0a, 0x0f, 0x50, 0x75, 0x73, 0x68, 0x4e, 0x6f, 0x74, 0x69, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x12, 0x1a, 0x0a, 0x08, 0x6d, 0x65, 0x73, 0x73, 0x65, 0x61, 0x67, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x08, 0x6d, 0x65, 0x73, 0x73, 0x65, 0x61, 0x67, 0x65, 0x12, 0x41, 0x0a,
	0x0e, 0x73, 0x63, 0x68, 0x65, 0x64, 0x75, 0x6c, 0x65, 0x64, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d,
	0x70, 0x52, 0x0d, 0x73, 0x63, 0x68, 0x65, 0x64, 0x75, 0x6c, 0x65, 0x64, 0x54, 0x69, 0x6d, 0x65,
	0x12, 0x33, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1f,
	0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x4e, 0x4f,
	0x54, 0x49, 0x46, 0x49, 0x43, 0x41, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x52,
	0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x1f, 0x0a, 0x0b, 0x72, 0x65, 0x63, 0x65, 0x69, 0x76, 0x65,
	0x64, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0a, 0x72, 0x65, 0x63, 0x65,
	0x69, 0x76, 0x65, 0x64, 0x49, 0x64, 0x22, 0x4b, 0x0a, 0x1b, 0x4c, 0x69, 0x73, 0x74, 0x4e, 0x6f,
	0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0d, 0x52, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x6f,
	0x66, 0x66, 0x73, 0x65, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x04, 0x52, 0x06, 0x6f, 0x66, 0x66,
	0x73, 0x65, 0x74, 0x22, 0xf3, 0x01, 0x0a, 0x10, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73,
	0x61, 0x67, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61,
	0x67, 0x65, 0x12, 0x33, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e,
	0x32, 0x1f, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e,
	0x4e, 0x4f, 0x54, 0x49, 0x46, 0x49, 0x43, 0x41, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x54, 0x59, 0x50,
	0x45, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x72, 0x65, 0x66, 0x65, 0x72,
	0x65, 0x6e, 0x63, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0b, 0x72,
	0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x49, 0x64, 0x12, 0x14, 0x0a, 0x05, 0x69, 0x6d,
	0x61, 0x67, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x69, 0x6d, 0x61, 0x67, 0x65,
	0x12, 0x17, 0x0a, 0x07, 0x69, 0x73, 0x5f, 0x73, 0x65, 0x65, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x08, 0x52, 0x06, 0x69, 0x73, 0x53, 0x65, 0x65, 0x6e, 0x12, 0x2e, 0x0a, 0x04, 0x74, 0x69, 0x6d,
	0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74,
	0x61, 0x6d, 0x70, 0x52, 0x04, 0x74, 0x69, 0x6d, 0x65, 0x2a, 0x5a, 0x0a, 0x11, 0x4e, 0x4f, 0x54,
	0x49, 0x46, 0x49, 0x43, 0x41, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x12, 0x0c,
	0x0a, 0x08, 0x41, 0x4c, 0x4c, 0x55, 0x53, 0x45, 0x52, 0x53, 0x10, 0x00, 0x12, 0x14, 0x0a, 0x10,
	0x4d, 0x45, 0x4d, 0x42, 0x45, 0x52, 0x53, 0x5f, 0x4f, 0x46, 0x5f, 0x47, 0x52, 0x4f, 0x55, 0x50,
	0x10, 0x01, 0x12, 0x13, 0x0a, 0x0f, 0x47, 0x52, 0x4f, 0x55, 0x50, 0x53, 0x5f, 0x4f, 0x46, 0x5f,
	0x45, 0x56, 0x45, 0x4e, 0x54, 0x10, 0x02, 0x12, 0x0c, 0x0a, 0x08, 0x4f, 0x4e, 0x4c, 0x59, 0x55,
	0x53, 0x45, 0x52, 0x10, 0x03, 0x32, 0xf2, 0x03, 0x0a, 0x0c, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69,
	0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x5f, 0x0a, 0x1f, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x49,
	0x66, 0x45, 0x78, 0x69, 0x73, 0x74, 0x4f, 0x72, 0x53, 0x61, 0x76, 0x65, 0x45, 0x78, 0x70, 0x6f,
	0x50, 0x75, 0x73, 0x68, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x22, 0x2e, 0x6e, 0x6f, 0x74, 0x69,
	0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x45, 0x78, 0x70, 0x6f, 0x50, 0x75, 0x73,
	0x68, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x16, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x45, 0x6d, 0x70, 0x74, 0x79, 0x22, 0x00, 0x12, 0x53, 0x0a, 0x13, 0x52, 0x65, 0x6d, 0x6f, 0x76,
	0x65, 0x45, 0x78, 0x70, 0x6f, 0x50, 0x75, 0x73, 0x68, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x22,
	0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x45, 0x78,
	0x70, 0x6f, 0x50, 0x75, 0x73, 0x68, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x22, 0x00, 0x12, 0x6c, 0x0a, 0x14,
	0x4c, 0x69, 0x73, 0x74, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x49, 0x6e, 0x66, 0x6f, 0x12, 0x29, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x27, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x4c,
	0x69, 0x73, 0x74, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49,
	0x6e, 0x66, 0x6f, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x22, 0x00, 0x12, 0x4a, 0x0a, 0x16, 0x44, 0x65,
	0x6c, 0x65, 0x74, 0x65, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x49, 0x6e, 0x66, 0x6f, 0x12, 0x17, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x2e, 0x49, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x15, 0x2e,
	0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x49, 0x64, 0x52,
	0x65, 0x70, 0x6c, 0x79, 0x22, 0x00, 0x12, 0x72, 0x0a, 0x16, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x6e, 0x66, 0x6f,
	0x12, 0x2b, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e,
	0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x29, 0x2e,
	0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x55, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49,
	0x6e, 0x66, 0x6f, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x22, 0x00, 0x42, 0x43, 0x5a, 0x41, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x61, 0x6e, 0x68, 0x72, 0x65, 0x76,
	0x2f, 0x72, 0x75, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x69, 0x6e, 0x67, 0x2f, 0x62, 0x61, 0x63,
	0x6b, 0x65, 0x6e, 0x64, 0x2f, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x2f, 0x70, 0x6b, 0x67, 0x2f, 0x61,
	0x70, 0x69, 0x3b, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
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

var file_api_notification_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_api_notification_proto_msgTypes = make([]protoimpl.MessageInfo, 9)
var file_api_notification_proto_goTypes = []interface{}{
	(NOTIFICATION_TYPE)(0),                // 0: notification.NOTIFICATION_TYPE
	(*UpdateNotificationInfoRequest)(nil), // 1: notification.UpdateNotificationInfoRequest
	(*UpdateNotificationInfoReply)(nil),   // 2: notification.UpdateNotificationInfoReply
	(*IdRequest)(nil),                     // 3: notification.IdRequest
	(*IdReply)(nil),                       // 4: notification.IdReply
	(*ExpoPushTokenRequest)(nil),          // 5: notification.ExpoPushTokenRequest
	(*ListNotificationInfoReply)(nil),     // 6: notification.ListNotificationInfoReply
	(*PushNotiRequest)(nil),               // 7: notification.PushNotiRequest
	(*ListNotificationInfoRequest)(nil),   // 8: notification.ListNotificationInfoRequest
	(*NotificationInfo)(nil),              // 9: notification.NotificationInfo
	(*timestamppb.Timestamp)(nil),         // 10: google.protobuf.Timestamp
	(*emptypb.Empty)(nil),                 // 11: google.protobuf.Empty
}
var file_api_notification_proto_depIdxs = []int32{
	9,  // 0: notification.ListNotificationInfoReply.notification_list:type_name -> notification.NotificationInfo
	10, // 1: notification.PushNotiRequest.scheduled_time:type_name -> google.protobuf.Timestamp
	0,  // 2: notification.PushNotiRequest.type:type_name -> notification.NOTIFICATION_TYPE
	0,  // 3: notification.NotificationInfo.type:type_name -> notification.NOTIFICATION_TYPE
	10, // 4: notification.NotificationInfo.time:type_name -> google.protobuf.Timestamp
	5,  // 5: notification.Notification.CheckIfExistOrSaveExpoPushToken:input_type -> notification.ExpoPushTokenRequest
	5,  // 6: notification.Notification.RemoveExpoPushToken:input_type -> notification.ExpoPushTokenRequest
	8,  // 7: notification.Notification.ListNotificationInfo:input_type -> notification.ListNotificationInfoRequest
	3,  // 8: notification.Notification.DeleteNotificationInfo:input_type -> notification.IdRequest
	1,  // 9: notification.Notification.UpdateNotificationInfo:input_type -> notification.UpdateNotificationInfoRequest
	11, // 10: notification.Notification.CheckIfExistOrSaveExpoPushToken:output_type -> google.protobuf.Empty
	11, // 11: notification.Notification.RemoveExpoPushToken:output_type -> google.protobuf.Empty
	6,  // 12: notification.Notification.ListNotificationInfo:output_type -> notification.ListNotificationInfoReply
	4,  // 13: notification.Notification.DeleteNotificationInfo:output_type -> notification.IdReply
	2,  // 14: notification.Notification.UpdateNotificationInfo:output_type -> notification.UpdateNotificationInfoReply
	10, // [10:15] is the sub-list for method output_type
	5,  // [5:10] is the sub-list for method input_type
	5,  // [5:5] is the sub-list for extension type_name
	5,  // [5:5] is the sub-list for extension extendee
	0,  // [0:5] is the sub-list for field type_name
}

func init() { file_api_notification_proto_init() }
func file_api_notification_proto_init() {
	if File_api_notification_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_api_notification_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateNotificationInfoRequest); i {
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
			switch v := v.(*UpdateNotificationInfoReply); i {
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
			switch v := v.(*IdRequest); i {
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
			switch v := v.(*IdReply); i {
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
		file_api_notification_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ExpoPushTokenRequest); i {
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
		file_api_notification_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListNotificationInfoReply); i {
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
		file_api_notification_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PushNotiRequest); i {
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
		file_api_notification_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListNotificationInfoRequest); i {
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
		file_api_notification_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NotificationInfo); i {
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
			NumEnums:      1,
			NumMessages:   9,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_api_notification_proto_goTypes,
		DependencyIndexes: file_api_notification_proto_depIdxs,
		EnumInfos:         file_api_notification_proto_enumTypes,
		MessageInfos:      file_api_notification_proto_msgTypes,
	}.Build()
	File_api_notification_proto = out.File
	file_api_notification_proto_rawDesc = nil
	file_api_notification_proto_goTypes = nil
	file_api_notification_proto_depIdxs = nil
}
