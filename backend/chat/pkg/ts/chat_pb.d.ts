import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class ListConversationRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): ListConversationRequest;

  getOffset(): number;
  setOffset(value: number): ListConversationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConversationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListConversationRequest): ListConversationRequest.AsObject;
  static serializeBinaryToWriter(message: ListConversationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConversationRequest;
  static deserializeBinaryFromReader(message: ListConversationRequest, reader: jspb.BinaryReader): ListConversationRequest;
}

export namespace ListConversationRequest {
  export type AsObject = {
    limit: number,
    offset: number,
  }
}

export class ListConversationReply extends jspb.Message {
  getConversationsList(): Array<ConversationInfo>;
  setConversationsList(value: Array<ConversationInfo>): ListConversationReply;
  clearConversationsList(): ListConversationReply;
  addConversations(value?: ConversationInfo, index?: number): ConversationInfo;

  getTotal(): number;
  setTotal(value: number): ListConversationReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConversationReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListConversationReply): ListConversationReply.AsObject;
  static serializeBinaryToWriter(message: ListConversationReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConversationReply;
  static deserializeBinaryFromReader(message: ListConversationReply, reader: jspb.BinaryReader): ListConversationReply;
}

export namespace ListConversationReply {
  export type AsObject = {
    conversationsList: Array<ConversationInfo.AsObject>,
    total: number,
  }
}

export class ConversationInfo extends jspb.Message {
  getPartner(): UserInfo | undefined;
  setPartner(value?: UserInfo): ConversationInfo;
  hasPartner(): boolean;
  clearPartner(): ConversationInfo;

  getLastmessage(): MessageInfo | undefined;
  setLastmessage(value?: MessageInfo): ConversationInfo;
  hasLastmessage(): boolean;
  clearLastmessage(): ConversationInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationInfo): ConversationInfo.AsObject;
  static serializeBinaryToWriter(message: ConversationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationInfo;
  static deserializeBinaryFromReader(message: ConversationInfo, reader: jspb.BinaryReader): ConversationInfo;
}

export namespace ConversationInfo {
  export type AsObject = {
    partner?: UserInfo.AsObject,
    lastmessage?: MessageInfo.AsObject,
  }
}

export class UserInfo extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): UserInfo;

  getDisplayName(): string;
  setDisplayName(value: string): UserInfo;

  getProfilePicture(): string;
  setProfilePicture(value: string): UserInfo;

  getUsername(): string;
  setUsername(value: string): UserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
  static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInfo;
  static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
  export type AsObject = {
    userId: number,
    displayName: string,
    profilePicture: string,
    username: string,
  }
}

export class DeleteConversationRequest extends jspb.Message {
  getToUserId(): number;
  setToUserId(value: number): DeleteConversationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConversationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConversationRequest): DeleteConversationRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteConversationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConversationRequest;
  static deserializeBinaryFromReader(message: DeleteConversationRequest, reader: jspb.BinaryReader): DeleteConversationRequest;
}

export namespace DeleteConversationRequest {
  export type AsObject = {
    toUserId: number,
  }
}

export class DeleteConversationReply extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteConversationReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConversationReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConversationReply): DeleteConversationReply.AsObject;
  static serializeBinaryToWriter(message: DeleteConversationReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConversationReply;
  static deserializeBinaryFromReader(message: DeleteConversationReply, reader: jspb.BinaryReader): DeleteConversationReply;
}

export namespace DeleteConversationReply {
  export type AsObject = {
    id: number,
  }
}

export class GetHistoryChatRequest extends jspb.Message {
  getToUserId(): number;
  setToUserId(value: number): GetHistoryChatRequest;

  getLimit(): number;
  setLimit(value: number): GetHistoryChatRequest;

  getOffset(): number;
  setOffset(value: number): GetHistoryChatRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetHistoryChatRequest;
  hasFrom(): boolean;
  clearFrom(): GetHistoryChatRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetHistoryChatRequest;
  hasTo(): boolean;
  clearTo(): GetHistoryChatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoryChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoryChatRequest): GetHistoryChatRequest.AsObject;
  static serializeBinaryToWriter(message: GetHistoryChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoryChatRequest;
  static deserializeBinaryFromReader(message: GetHistoryChatRequest, reader: jspb.BinaryReader): GetHistoryChatRequest;
}

export namespace GetHistoryChatRequest {
  export type AsObject = {
    toUserId: number,
    limit: number,
    offset: number,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetHistoryChatReply extends jspb.Message {
  getMessageinfolistList(): Array<MessageInfo>;
  setMessageinfolistList(value: Array<MessageInfo>): GetHistoryChatReply;
  clearMessageinfolistList(): GetHistoryChatReply;
  addMessageinfolist(value?: MessageInfo, index?: number): MessageInfo;

  getTotal(): number;
  setTotal(value: number): GetHistoryChatReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoryChatReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoryChatReply): GetHistoryChatReply.AsObject;
  static serializeBinaryToWriter(message: GetHistoryChatReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoryChatReply;
  static deserializeBinaryFromReader(message: GetHistoryChatReply, reader: jspb.BinaryReader): GetHistoryChatReply;
}

export namespace GetHistoryChatReply {
  export type AsObject = {
    messageinfolistList: Array<MessageInfo.AsObject>,
    total: number,
  }
}

export class MessageInfo extends jspb.Message {
  getId(): number;
  setId(value: number): MessageInfo;

  getMessage(): string;
  setMessage(value: string): MessageInfo;

  getFromUserId(): number;
  setFromUserId(value: number): MessageInfo;

  getToUserId(): number;
  setToUserId(value: number): MessageInfo;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): MessageInfo;
  hasTime(): boolean;
  clearTime(): MessageInfo;

  getIsSeen(): boolean;
  setIsSeen(value: boolean): MessageInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MessageInfo): MessageInfo.AsObject;
  static serializeBinaryToWriter(message: MessageInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageInfo;
  static deserializeBinaryFromReader(message: MessageInfo, reader: jspb.BinaryReader): MessageInfo;
}

export namespace MessageInfo {
  export type AsObject = {
    id: number,
    message: string,
    fromUserId: number,
    toUserId: number,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isSeen: boolean,
  }
}

export class SendMessageRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): SendMessageRequest;

  getToUserId(): number;
  setToUserId(value: number): SendMessageRequest;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): SendMessageRequest;
  hasTime(): boolean;
  clearTime(): SendMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendMessageRequest): SendMessageRequest.AsObject;
  static serializeBinaryToWriter(message: SendMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageRequest;
  static deserializeBinaryFromReader(message: SendMessageRequest, reader: jspb.BinaryReader): SendMessageRequest;
}

export namespace SendMessageRequest {
  export type AsObject = {
    message: string,
    toUserId: number,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class SendMessageReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageReply.AsObject;
  static toObject(includeInstance: boolean, msg: SendMessageReply): SendMessageReply.AsObject;
  static serializeBinaryToWriter(message: SendMessageReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageReply;
  static deserializeBinaryFromReader(message: SendMessageReply, reader: jspb.BinaryReader): SendMessageReply;
}

export namespace SendMessageReply {
  export type AsObject = {
  }
}

