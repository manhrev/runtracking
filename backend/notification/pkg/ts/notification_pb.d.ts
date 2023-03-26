import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class UpdateNotificationInfoRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateNotificationInfoRequest;

  getIsSeen(): boolean;
  setIsSeen(value: boolean): UpdateNotificationInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNotificationInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNotificationInfoRequest): UpdateNotificationInfoRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateNotificationInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNotificationInfoRequest;
  static deserializeBinaryFromReader(message: UpdateNotificationInfoRequest, reader: jspb.BinaryReader): UpdateNotificationInfoRequest;
}

export namespace UpdateNotificationInfoRequest {
  export type AsObject = {
    id: number,
    isSeen: boolean,
  }
}

export class UpdateNotificationInfoReply extends jspb.Message {
  getIdUpdated(): number;
  setIdUpdated(value: number): UpdateNotificationInfoReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNotificationInfoReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNotificationInfoReply): UpdateNotificationInfoReply.AsObject;
  static serializeBinaryToWriter(message: UpdateNotificationInfoReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNotificationInfoReply;
  static deserializeBinaryFromReader(message: UpdateNotificationInfoReply, reader: jspb.BinaryReader): UpdateNotificationInfoReply;
}

export namespace UpdateNotificationInfoReply {
  export type AsObject = {
    idUpdated: number,
  }
}

export class IdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): IdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IdRequest): IdRequest.AsObject;
  static serializeBinaryToWriter(message: IdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdRequest;
  static deserializeBinaryFromReader(message: IdRequest, reader: jspb.BinaryReader): IdRequest;
}

export namespace IdRequest {
  export type AsObject = {
    id: number,
  }
}

export class IdReply extends jspb.Message {
  getId(): number;
  setId(value: number): IdReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdReply.AsObject;
  static toObject(includeInstance: boolean, msg: IdReply): IdReply.AsObject;
  static serializeBinaryToWriter(message: IdReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdReply;
  static deserializeBinaryFromReader(message: IdReply, reader: jspb.BinaryReader): IdReply;
}

export namespace IdReply {
  export type AsObject = {
    id: number,
  }
}

export class ExpoPushTokenRequest extends jspb.Message {
  getExpoPushToken(): string;
  setExpoPushToken(value: string): ExpoPushTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpoPushTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExpoPushTokenRequest): ExpoPushTokenRequest.AsObject;
  static serializeBinaryToWriter(message: ExpoPushTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpoPushTokenRequest;
  static deserializeBinaryFromReader(message: ExpoPushTokenRequest, reader: jspb.BinaryReader): ExpoPushTokenRequest;
}

export namespace ExpoPushTokenRequest {
  export type AsObject = {
    expoPushToken: string,
  }
}

export class ListNotificationInfoReply extends jspb.Message {
  getNotificationListList(): Array<NotificationInfo>;
  setNotificationListList(value: Array<NotificationInfo>): ListNotificationInfoReply;
  clearNotificationListList(): ListNotificationInfoReply;
  addNotificationList(value?: NotificationInfo, index?: number): NotificationInfo;

  getTotal(): number;
  setTotal(value: number): ListNotificationInfoReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotificationInfoReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotificationInfoReply): ListNotificationInfoReply.AsObject;
  static serializeBinaryToWriter(message: ListNotificationInfoReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotificationInfoReply;
  static deserializeBinaryFromReader(message: ListNotificationInfoReply, reader: jspb.BinaryReader): ListNotificationInfoReply;
}

export namespace ListNotificationInfoReply {
  export type AsObject = {
    notificationListList: Array<NotificationInfo.AsObject>,
    total: number,
  }
}

export class PushNotiRequest extends jspb.Message {
  getMesseage(): string;
  setMesseage(value: string): PushNotiRequest;

  getScheduledTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduledTime(value?: google_protobuf_timestamp_pb.Timestamp): PushNotiRequest;
  hasScheduledTime(): boolean;
  clearScheduledTime(): PushNotiRequest;

  getSourceType(): SOURCE_TYPE;
  setSourceType(value: SOURCE_TYPE): PushNotiRequest;

  getSourceId(): number;
  setSourceId(value: number): PushNotiRequest;

  getReceiveIdsList(): Array<number>;
  setReceiveIdsList(value: Array<number>): PushNotiRequest;
  clearReceiveIdsList(): PushNotiRequest;
  addReceiveIds(value: number, index?: number): PushNotiRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushNotiRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PushNotiRequest): PushNotiRequest.AsObject;
  static serializeBinaryToWriter(message: PushNotiRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushNotiRequest;
  static deserializeBinaryFromReader(message: PushNotiRequest, reader: jspb.BinaryReader): PushNotiRequest;
}

export namespace PushNotiRequest {
  export type AsObject = {
    messeage: string,
    scheduledTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    sourceType: SOURCE_TYPE,
    sourceId: number,
    receiveIdsList: Array<number>,
  }
}

export class ListNotificationInfoRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): ListNotificationInfoRequest;

  getOffset(): number;
  setOffset(value: number): ListNotificationInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotificationInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotificationInfoRequest): ListNotificationInfoRequest.AsObject;
  static serializeBinaryToWriter(message: ListNotificationInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotificationInfoRequest;
  static deserializeBinaryFromReader(message: ListNotificationInfoRequest, reader: jspb.BinaryReader): ListNotificationInfoRequest;
}

export namespace ListNotificationInfoRequest {
  export type AsObject = {
    limit: number,
    offset: number,
  }
}

export class NotificationInfo extends jspb.Message {
  getId(): number;
  setId(value: number): NotificationInfo;

  getMessage(): string;
  setMessage(value: string): NotificationInfo;

  getSourceType(): SOURCE_TYPE;
  setSourceType(value: SOURCE_TYPE): NotificationInfo;

  getSourceId(): number;
  setSourceId(value: number): NotificationInfo;

  getReceiveIdsList(): Array<number>;
  setReceiveIdsList(value: Array<number>): NotificationInfo;
  clearReceiveIdsList(): NotificationInfo;
  addReceiveIds(value: number, index?: number): NotificationInfo;

  getImage(): string;
  setImage(value: string): NotificationInfo;

  getIsSeen(): boolean;
  setIsSeen(value: boolean): NotificationInfo;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): NotificationInfo;
  hasTime(): boolean;
  clearTime(): NotificationInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationInfo): NotificationInfo.AsObject;
  static serializeBinaryToWriter(message: NotificationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationInfo;
  static deserializeBinaryFromReader(message: NotificationInfo, reader: jspb.BinaryReader): NotificationInfo;
}

export namespace NotificationInfo {
  export type AsObject = {
    id: number,
    message: string,
    sourceType: SOURCE_TYPE,
    sourceId: number,
    receiveIdsList: Array<number>,
    image: string,
    isSeen: boolean,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export enum SOURCE_TYPE { 
  ADMIN = 0,
  GROUP = 1,
  EVENT = 2,
  PERSONAL = 3,
  PLAN = 4,
}
