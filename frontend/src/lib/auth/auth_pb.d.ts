import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class LoginRequest extends jspb.Message {
  getUserName(): string;
  setUserName(value: string): LoginRequest;

  getPassword(): string;
  setPassword(value: string): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    userName: string,
    password: string,
  }
}

export class LoginReply extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): LoginReply;

  getUserName(): string;
  setUserName(value: string): LoginReply;

  getAccessToken(): string;
  setAccessToken(value: string): LoginReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginReply.AsObject;
  static toObject(includeInstance: boolean, msg: LoginReply): LoginReply.AsObject;
  static serializeBinaryToWriter(message: LoginReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginReply;
  static deserializeBinaryFromReader(message: LoginReply, reader: jspb.BinaryReader): LoginReply;
}

export namespace LoginReply {
  export type AsObject = {
    userId: number,
    userName: string,
    accessToken: string,
  }
}

export class SignUpRequest extends jspb.Message {
  getUserName(): string;
  setUserName(value: string): SignUpRequest;

  getPassword(): string;
  setPassword(value: string): SignUpRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignUpRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignUpRequest): SignUpRequest.AsObject;
  static serializeBinaryToWriter(message: SignUpRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignUpRequest;
  static deserializeBinaryFromReader(message: SignUpRequest, reader: jspb.BinaryReader): SignUpRequest;
}

export namespace SignUpRequest {
  export type AsObject = {
    userName: string,
    password: string,
  }
}

export class SignUpReply extends jspb.Message {
  getTokenInfo(): TokenInfo | undefined;
  setTokenInfo(value?: TokenInfo): SignUpReply;
  hasTokenInfo(): boolean;
  clearTokenInfo(): SignUpReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignUpReply.AsObject;
  static toObject(includeInstance: boolean, msg: SignUpReply): SignUpReply.AsObject;
  static serializeBinaryToWriter(message: SignUpReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignUpReply;
  static deserializeBinaryFromReader(message: SignUpReply, reader: jspb.BinaryReader): SignUpReply;
}

export namespace SignUpReply {
  export type AsObject = {
    tokenInfo?: TokenInfo.AsObject,
  }
}

export class TokenInfo extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): TokenInfo;

  getUserName(): string;
  setUserName(value: string): TokenInfo;

  getIdToken(): string;
  setIdToken(value: string): TokenInfo;

  getAccessToken(): string;
  setAccessToken(value: string): TokenInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TokenInfo): TokenInfo.AsObject;
  static serializeBinaryToWriter(message: TokenInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenInfo;
  static deserializeBinaryFromReader(message: TokenInfo, reader: jspb.BinaryReader): TokenInfo;
}

export namespace TokenInfo {
  export type AsObject = {
    userId: number,
    userName: string,
    idToken: string,
    accessToken: string,
  }
}

