import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class ListUserInfoRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): ListUserInfoRequest;

  getOffset(): number;
  setOffset(value: number): ListUserInfoRequest;

  getAscending(): boolean;
  setAscending(value: boolean): ListUserInfoRequest;

  getSortBy(): ListUserInfoRequest.UserSortBy;
  setSortBy(value: ListUserInfoRequest.UserSortBy): ListUserInfoRequest;

  getUserIdsList(): Array<number>;
  setUserIdsList(value: Array<number>): ListUserInfoRequest;
  clearUserIdsList(): ListUserInfoRequest;
  addUserIds(value: number, index?: number): ListUserInfoRequest;

  getSearchByName(): string;
  setSearchByName(value: string): ListUserInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserInfoRequest): ListUserInfoRequest.AsObject;
  static serializeBinaryToWriter(message: ListUserInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserInfoRequest;
  static deserializeBinaryFromReader(message: ListUserInfoRequest, reader: jspb.BinaryReader): ListUserInfoRequest;
}

export namespace ListUserInfoRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    ascending: boolean,
    sortBy: ListUserInfoRequest.UserSortBy,
    userIdsList: Array<number>,
    searchByName: string,
  }

  export enum UserSortBy { 
    USER_SORT_BY_UNSPECIFIED = 0,
    USER_SORT_BY_NAME = 1,
  }
}

export class ListUserInfoReply extends jspb.Message {
  getUsersList(): Array<UserInfo>;
  setUsersList(value: Array<UserInfo>): ListUserInfoReply;
  clearUsersList(): ListUserInfoReply;
  addUsers(value?: UserInfo, index?: number): UserInfo;

  getTotal(): number;
  setTotal(value: number): ListUserInfoReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserInfoReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserInfoReply): ListUserInfoReply.AsObject;
  static serializeBinaryToWriter(message: ListUserInfoReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserInfoReply;
  static deserializeBinaryFromReader(message: ListUserInfoReply, reader: jspb.BinaryReader): ListUserInfoReply;
}

export namespace ListUserInfoReply {
  export type AsObject = {
    usersList: Array<UserInfo.AsObject>,
    total: number,
  }
}

export class GetAllUsersReply extends jspb.Message {
  getUsersList(): Array<UserInfo>;
  setUsersList(value: Array<UserInfo>): GetAllUsersReply;
  clearUsersList(): GetAllUsersReply;
  addUsers(value?: UserInfo, index?: number): UserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllUsersReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllUsersReply): GetAllUsersReply.AsObject;
  static serializeBinaryToWriter(message: GetAllUsersReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllUsersReply;
  static deserializeBinaryFromReader(message: GetAllUsersReply, reader: jspb.BinaryReader): GetAllUsersReply;
}

export namespace GetAllUsersReply {
  export type AsObject = {
    usersList: Array<UserInfo.AsObject>,
  }
}

export class HealthRecordRequest extends jspb.Message {
  getAge(): number;
  setAge(value: number): HealthRecordRequest;

  getHeight(): number;
  setHeight(value: number): HealthRecordRequest;

  getWeight(): number;
  setWeight(value: number): HealthRecordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthRecordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HealthRecordRequest): HealthRecordRequest.AsObject;
  static serializeBinaryToWriter(message: HealthRecordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthRecordRequest;
  static deserializeBinaryFromReader(message: HealthRecordRequest, reader: jspb.BinaryReader): HealthRecordRequest;
}

export namespace HealthRecordRequest {
  export type AsObject = {
    age: number,
    height: number,
    weight: number,
  }
}

export class GetByIdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetByIdRequest): GetByIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByIdRequest;
  static deserializeBinaryFromReader(message: GetByIdRequest, reader: jspb.BinaryReader): GetByIdRequest;
}

export namespace GetByIdRequest {
  export type AsObject = {
    id: number,
  }
}

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

  getDisplayName(): string;
  setDisplayName(value: string): SignUpRequest;

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
    displayName: string,
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

export class MeReply extends jspb.Message {
  getUser(): UserInfo | undefined;
  setUser(value?: UserInfo): MeReply;
  hasUser(): boolean;
  clearUser(): MeReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeReply.AsObject;
  static toObject(includeInstance: boolean, msg: MeReply): MeReply.AsObject;
  static serializeBinaryToWriter(message: MeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeReply;
  static deserializeBinaryFromReader(message: MeReply, reader: jspb.BinaryReader): MeReply;
}

export namespace MeReply {
  export type AsObject = {
    user?: UserInfo.AsObject,
  }
}

export class UserInfo extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): UserInfo;

  getDisplayName(): string;
  setDisplayName(value: string): UserInfo;

  getUsername(): string;
  setUsername(value: string): UserInfo;

  getEmail(): string;
  setEmail(value: string): UserInfo;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): UserInfo;

  getHeight(): number;
  setHeight(value: number): UserInfo;

  getWeight(): number;
  setWeight(value: number): UserInfo;

  getAge(): number;
  setAge(value: number): UserInfo;

  getProfilePicture(): string;
  setProfilePicture(value: string): UserInfo;

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
    username: string,
    email: string,
    phoneNumber: string,
    height: number,
    weight: number,
    age: number,
    profilePicture: string,
  }
}

export class UpdateUserInfoRequest extends jspb.Message {
  getUserInfo(): UserInfo | undefined;
  setUserInfo(value?: UserInfo): UpdateUserInfoRequest;
  hasUserInfo(): boolean;
  clearUserInfo(): UpdateUserInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserInfoRequest): UpdateUserInfoRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserInfoRequest;
  static deserializeBinaryFromReader(message: UpdateUserInfoRequest, reader: jspb.BinaryReader): UpdateUserInfoRequest;
}

export namespace UpdateUserInfoRequest {
  export type AsObject = {
    userInfo?: UserInfo.AsObject,
  }
}

export class UpdateUserInfoReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserInfoReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserInfoReply): UpdateUserInfoReply.AsObject;
  static serializeBinaryToWriter(message: UpdateUserInfoReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserInfoReply;
  static deserializeBinaryFromReader(message: UpdateUserInfoReply, reader: jspb.BinaryReader): UpdateUserInfoReply;
}

export namespace UpdateUserInfoReply {
  export type AsObject = {
  }
}

export class UserPublicInfo extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): UserPublicInfo;

  getDisplayName(): string;
  setDisplayName(value: string): UserPublicInfo;

  getProfilePicture(): string;
  setProfilePicture(value: string): UserPublicInfo;

  getUsername(): string;
  setUsername(value: string): UserPublicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserPublicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserPublicInfo): UserPublicInfo.AsObject;
  static serializeBinaryToWriter(message: UserPublicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserPublicInfo;
  static deserializeBinaryFromReader(message: UserPublicInfo, reader: jspb.BinaryReader): UserPublicInfo;
}

export namespace UserPublicInfo {
  export type AsObject = {
    userId: number,
    displayName: string,
    profilePicture: string,
    username: string,
  }
}

export class GetUsersPublicInfoRequest extends jspb.Message {
  getUserIdsList(): Array<number>;
  setUserIdsList(value: Array<number>): GetUsersPublicInfoRequest;
  clearUserIdsList(): GetUsersPublicInfoRequest;
  addUserIds(value: number, index?: number): GetUsersPublicInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersPublicInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersPublicInfoRequest): GetUsersPublicInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetUsersPublicInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersPublicInfoRequest;
  static deserializeBinaryFromReader(message: GetUsersPublicInfoRequest, reader: jspb.BinaryReader): GetUsersPublicInfoRequest;
}

export namespace GetUsersPublicInfoRequest {
  export type AsObject = {
    userIdsList: Array<number>,
  }
}

export class GetUsersPublicInfoReply extends jspb.Message {
  getUsersList(): Array<UserPublicInfo>;
  setUsersList(value: Array<UserPublicInfo>): GetUsersPublicInfoReply;
  clearUsersList(): GetUsersPublicInfoReply;
  addUsers(value?: UserPublicInfo, index?: number): UserPublicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersPublicInfoReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersPublicInfoReply): GetUsersPublicInfoReply.AsObject;
  static serializeBinaryToWriter(message: GetUsersPublicInfoReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersPublicInfoReply;
  static deserializeBinaryFromReader(message: GetUsersPublicInfoReply, reader: jspb.BinaryReader): GetUsersPublicInfoReply;
}

export namespace GetUsersPublicInfoReply {
  export type AsObject = {
    usersList: Array<UserPublicInfo.AsObject>,
  }
}

