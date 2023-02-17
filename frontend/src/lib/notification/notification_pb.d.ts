import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class ExpoPushTokenRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): ExpoPushTokenRequest;

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
    userId: number,
    expoPushToken: string,
  }
}

export class PushNotiRequest extends jspb.Message {
  getMesseage(): string;
  setMesseage(value: string): PushNotiRequest;

  getScheduledTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduledTime(value?: google_protobuf_timestamp_pb.Timestamp): PushNotiRequest;
  hasScheduledTime(): boolean;
  clearScheduledTime(): PushNotiRequest;

  getType(): PushNotiRequest.NOTIFICATION_TYPE;
  setType(value: PushNotiRequest.NOTIFICATION_TYPE): PushNotiRequest;

  getReceivedId(): number;
  setReceivedId(value: number): PushNotiRequest;

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
    type: PushNotiRequest.NOTIFICATION_TYPE,
    receivedId: number,
  }

  export enum NOTIFICATION_TYPE { 
    ALLUSERS = 0,
    MEMBERS_OF_GROUP = 1,
    GROUPS_OF_EVENT = 2,
    ONLYUSER = 3,
  }
}

