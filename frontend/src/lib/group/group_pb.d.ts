import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class LeaveGroupRequest extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): LeaveGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaveGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LeaveGroupRequest): LeaveGroupRequest.AsObject;
  static serializeBinaryToWriter(message: LeaveGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaveGroupRequest;
  static deserializeBinaryFromReader(message: LeaveGroupRequest, reader: jspb.BinaryReader): LeaveGroupRequest;
}

export namespace LeaveGroupRequest {
  export type AsObject = {
    groupId: number,
  }
}

export class LeaveGroupReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaveGroupReply.AsObject;
  static toObject(includeInstance: boolean, msg: LeaveGroupReply): LeaveGroupReply.AsObject;
  static serializeBinaryToWriter(message: LeaveGroupReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaveGroupReply;
  static deserializeBinaryFromReader(message: LeaveGroupReply, reader: jspb.BinaryReader): LeaveGroupReply;
}

export namespace LeaveGroupReply {
  export type AsObject = {
  }
}

export class BanMemberRequest extends jspb.Message {
  getMemberId(): number;
  setMemberId(value: number): BanMemberRequest;

  getGroupId(): number;
  setGroupId(value: number): BanMemberRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BanMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BanMemberRequest): BanMemberRequest.AsObject;
  static serializeBinaryToWriter(message: BanMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BanMemberRequest;
  static deserializeBinaryFromReader(message: BanMemberRequest, reader: jspb.BinaryReader): BanMemberRequest;
}

export namespace BanMemberRequest {
  export type AsObject = {
    memberId: number,
    groupId: number,
  }
}

export class BanMemberReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BanMemberReply.AsObject;
  static toObject(includeInstance: boolean, msg: BanMemberReply): BanMemberReply.AsObject;
  static serializeBinaryToWriter(message: BanMemberReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BanMemberReply;
  static deserializeBinaryFromReader(message: BanMemberReply, reader: jspb.BinaryReader): BanMemberReply;
}

export namespace BanMemberReply {
  export type AsObject = {
  }
}

export class AcceptMemberRequest extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): AcceptMemberRequest;

  getMemberId(): number;
  setMemberId(value: number): AcceptMemberRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptMemberRequest): AcceptMemberRequest.AsObject;
  static serializeBinaryToWriter(message: AcceptMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptMemberRequest;
  static deserializeBinaryFromReader(message: AcceptMemberRequest, reader: jspb.BinaryReader): AcceptMemberRequest;
}

export namespace AcceptMemberRequest {
  export type AsObject = {
    groupId: number,
    memberId: number,
  }
}

export class AcceptMemberReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptMemberReply.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptMemberReply): AcceptMemberReply.AsObject;
  static serializeBinaryToWriter(message: AcceptMemberReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptMemberReply;
  static deserializeBinaryFromReader(message: AcceptMemberReply, reader: jspb.BinaryReader): AcceptMemberReply;
}

export namespace AcceptMemberReply {
  export type AsObject = {
  }
}

export class JoinGroupRequest extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): JoinGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinGroupRequest): JoinGroupRequest.AsObject;
  static serializeBinaryToWriter(message: JoinGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinGroupRequest;
  static deserializeBinaryFromReader(message: JoinGroupRequest, reader: jspb.BinaryReader): JoinGroupRequest;
}

export namespace JoinGroupRequest {
  export type AsObject = {
    groupId: number,
  }
}

export class JoinGroupReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinGroupReply.AsObject;
  static toObject(includeInstance: boolean, msg: JoinGroupReply): JoinGroupReply.AsObject;
  static serializeBinaryToWriter(message: JoinGroupReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinGroupReply;
  static deserializeBinaryFromReader(message: JoinGroupReply, reader: jspb.BinaryReader): JoinGroupReply;
}

export namespace JoinGroupReply {
  export type AsObject = {
  }
}

export class CreateGroupRequest extends jspb.Message {
  getGroupInfo(): GroupInfo | undefined;
  setGroupInfo(value?: GroupInfo): CreateGroupRequest;
  hasGroupInfo(): boolean;
  clearGroupInfo(): CreateGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGroupRequest): CreateGroupRequest.AsObject;
  static serializeBinaryToWriter(message: CreateGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGroupRequest;
  static deserializeBinaryFromReader(message: CreateGroupRequest, reader: jspb.BinaryReader): CreateGroupRequest;
}

export namespace CreateGroupRequest {
  export type AsObject = {
    groupInfo?: GroupInfo.AsObject,
  }
}

export class CreateGroupReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGroupReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGroupReply): CreateGroupReply.AsObject;
  static serializeBinaryToWriter(message: CreateGroupReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGroupReply;
  static deserializeBinaryFromReader(message: CreateGroupReply, reader: jspb.BinaryReader): CreateGroupReply;
}

export namespace CreateGroupReply {
  export type AsObject = {
  }
}

export class ListMembersOfGroupRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): ListMembersOfGroupRequest;

  getOffset(): number;
  setOffset(value: number): ListMembersOfGroupRequest;

  getAscending(): boolean;
  setAscending(value: boolean): ListMembersOfGroupRequest;

  getGroupId(): number;
  setGroupId(value: number): ListMembersOfGroupRequest;

  getSortBy(): ListMembersOfGroupRequest.MOGSortBy;
  setSortBy(value: ListMembersOfGroupRequest.MOGSortBy): ListMembersOfGroupRequest;

  getSearchByName(): string;
  setSearchByName(value: string): ListMembersOfGroupRequest;

  getStatus(): Member.Status;
  setStatus(value: Member.Status): ListMembersOfGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMembersOfGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMembersOfGroupRequest): ListMembersOfGroupRequest.AsObject;
  static serializeBinaryToWriter(message: ListMembersOfGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMembersOfGroupRequest;
  static deserializeBinaryFromReader(message: ListMembersOfGroupRequest, reader: jspb.BinaryReader): ListMembersOfGroupRequest;
}

export namespace ListMembersOfGroupRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    ascending: boolean,
    groupId: number,
    sortBy: ListMembersOfGroupRequest.MOGSortBy,
    searchByName: string,
    status: Member.Status,
  }

  export enum MOGSortBy { 
    MOG_SORT_BY_UNSPECIFIED = 0,
    MOG_SORT_BY_CREATED_TIME = 1,
    MOG_SORT_BY_NAME = 2,
  }
}

export class ListMembersOfGroupReply extends jspb.Message {
  getMembersList(): Array<Member>;
  setMembersList(value: Array<Member>): ListMembersOfGroupReply;
  clearMembersList(): ListMembersOfGroupReply;
  addMembers(value?: Member, index?: number): Member;

  getTotal(): number;
  setTotal(value: number): ListMembersOfGroupReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMembersOfGroupReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListMembersOfGroupReply): ListMembersOfGroupReply.AsObject;
  static serializeBinaryToWriter(message: ListMembersOfGroupReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMembersOfGroupReply;
  static deserializeBinaryFromReader(message: ListMembersOfGroupReply, reader: jspb.BinaryReader): ListMembersOfGroupReply;
}

export namespace ListMembersOfGroupReply {
  export type AsObject = {
    membersList: Array<Member.AsObject>,
    total: number,
  }
}

export class ListGroupRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): ListGroupRequest;

  getOffset(): number;
  setOffset(value: number): ListGroupRequest;

  getAscending(): boolean;
  setAscending(value: boolean): ListGroupRequest;

  getSearchByName(): string;
  setSearchByName(value: string): ListGroupRequest;

  getFilterBy(): ListGroupRequest.FilterBy;
  setFilterBy(value: ListGroupRequest.FilterBy): ListGroupRequest;

  getSortBy(): GroupSortBy;
  setSortBy(value: GroupSortBy): ListGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListGroupRequest): ListGroupRequest.AsObject;
  static serializeBinaryToWriter(message: ListGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGroupRequest;
  static deserializeBinaryFromReader(message: ListGroupRequest, reader: jspb.BinaryReader): ListGroupRequest;
}

export namespace ListGroupRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    ascending: boolean,
    searchByName: string,
    filterBy: ListGroupRequest.FilterBy,
    sortBy: GroupSortBy,
  }

  export enum FilterBy { 
    FILTER_BY_UNSPECIFIED = 0,
    FILTER_BY_IS_MEMBER = 1,
    FILTER_BY_IS_NOT_MEMBER = 2,
    FILTER_BY_IS_ADMIN = 3,
  }
}

export class ListGroupReply extends jspb.Message {
  getGroupListList(): Array<GroupInfo>;
  setGroupListList(value: Array<GroupInfo>): ListGroupReply;
  clearGroupListList(): ListGroupReply;
  addGroupList(value?: GroupInfo, index?: number): GroupInfo;

  getTotal(): number;
  setTotal(value: number): ListGroupReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGroupReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListGroupReply): ListGroupReply.AsObject;
  static serializeBinaryToWriter(message: ListGroupReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGroupReply;
  static deserializeBinaryFromReader(message: ListGroupReply, reader: jspb.BinaryReader): ListGroupReply;
}

export namespace ListGroupReply {
  export type AsObject = {
    groupListList: Array<GroupInfo.AsObject>,
    total: number,
  }
}

export class GroupInfo extends jspb.Message {
  getId(): number;
  setId(value: number): GroupInfo;

  getName(): string;
  setName(value: string): GroupInfo;

  getDescription(): string;
  setDescription(value: string): GroupInfo;

  getBackgroundPicture(): string;
  setBackgroundPicture(value: string): GroupInfo;

  getLeaderId(): number;
  setLeaderId(value: number): GroupInfo;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GroupInfo;
  hasCreatedAt(): boolean;
  clearCreatedAt(): GroupInfo;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GroupInfo;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): GroupInfo;

  getMemberStatus(): Member.Status;
  setMemberStatus(value: Member.Status): GroupInfo;

  getNumOfMembers(): number;
  setNumOfMembers(value: number): GroupInfo;

  getNumOfChallenge(): number;
  setNumOfChallenge(value: number): GroupInfo;

  getNumOfEventParticipated(): number;
  setNumOfEventParticipated(value: number): GroupInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GroupInfo): GroupInfo.AsObject;
  static serializeBinaryToWriter(message: GroupInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupInfo;
  static deserializeBinaryFromReader(message: GroupInfo, reader: jspb.BinaryReader): GroupInfo;
}

export namespace GroupInfo {
  export type AsObject = {
    id: number,
    name: string,
    description: string,
    backgroundPicture: string,
    leaderId: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    memberStatus: Member.Status,
    numOfMembers: number,
    numOfChallenge: number,
    numOfEventParticipated: number,
  }
}

export class GetGroupRequest extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): GetGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupRequest): GetGroupRequest.AsObject;
  static serializeBinaryToWriter(message: GetGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupRequest;
  static deserializeBinaryFromReader(message: GetGroupRequest, reader: jspb.BinaryReader): GetGroupRequest;
}

export namespace GetGroupRequest {
  export type AsObject = {
    groupId: number,
  }
}

export class GetGroupReply extends jspb.Message {
  getGroupinfo(): GroupInfo | undefined;
  setGroupinfo(value?: GroupInfo): GetGroupReply;
  hasGroupinfo(): boolean;
  clearGroupinfo(): GetGroupReply;

  getMembersList(): Array<Member>;
  setMembersList(value: Array<Member>): GetGroupReply;
  clearMembersList(): GetGroupReply;
  addMembers(value?: Member, index?: number): Member;

  getChallengesList(): Array<ChallengeInfo>;
  setChallengesList(value: Array<ChallengeInfo>): GetGroupReply;
  clearChallengesList(): GetGroupReply;
  addChallenges(value?: ChallengeInfo, index?: number): ChallengeInfo;

  getEventsList(): Array<EventInfo>;
  setEventsList(value: Array<EventInfo>): GetGroupReply;
  clearEventsList(): GetGroupReply;
  addEvents(value?: EventInfo, index?: number): EventInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupReply): GetGroupReply.AsObject;
  static serializeBinaryToWriter(message: GetGroupReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupReply;
  static deserializeBinaryFromReader(message: GetGroupReply, reader: jspb.BinaryReader): GetGroupReply;
}

export namespace GetGroupReply {
  export type AsObject = {
    groupinfo?: GroupInfo.AsObject,
    membersList: Array<Member.AsObject>,
    challengesList: Array<ChallengeInfo.AsObject>,
    eventsList: Array<EventInfo.AsObject>,
  }
}

export class UpdateGroupRequest extends jspb.Message {
  getGroupinfo(): GroupInfo | undefined;
  setGroupinfo(value?: GroupInfo): UpdateGroupRequest;
  hasGroupinfo(): boolean;
  clearGroupinfo(): UpdateGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGroupRequest): UpdateGroupRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGroupRequest;
  static deserializeBinaryFromReader(message: UpdateGroupRequest, reader: jspb.BinaryReader): UpdateGroupRequest;
}

export namespace UpdateGroupRequest {
  export type AsObject = {
    groupinfo?: GroupInfo.AsObject,
  }
}

export class UpdateGroupReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGroupReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGroupReply): UpdateGroupReply.AsObject;
  static serializeBinaryToWriter(message: UpdateGroupReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGroupReply;
  static deserializeBinaryFromReader(message: UpdateGroupReply, reader: jspb.BinaryReader): UpdateGroupReply;
}

export namespace UpdateGroupReply {
  export type AsObject = {
  }
}

export class DeleteGroupRequest extends jspb.Message {
  getIdToDelete(): number;
  setIdToDelete(value: number): DeleteGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGroupRequest): DeleteGroupRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGroupRequest;
  static deserializeBinaryFromReader(message: DeleteGroupRequest, reader: jspb.BinaryReader): DeleteGroupRequest;
}

export namespace DeleteGroupRequest {
  export type AsObject = {
    idToDelete: number,
  }
}

export class DeleteGroupReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGroupReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGroupReply): DeleteGroupReply.AsObject;
  static serializeBinaryToWriter(message: DeleteGroupReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGroupReply;
  static deserializeBinaryFromReader(message: DeleteGroupReply, reader: jspb.BinaryReader): DeleteGroupReply;
}

export namespace DeleteGroupReply {
  export type AsObject = {
  }
}

export class Member extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): Member;

  getMemberId(): number;
  setMemberId(value: number): Member;

  getDisplayName(): string;
  setDisplayName(value: string): Member;

  getUsername(): string;
  setUsername(value: string): Member;

  getEmail(): string;
  setEmail(value: string): Member;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Member;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Member;

  getStatus(): Member.Status;
  setStatus(value: Member.Status): Member;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Member.AsObject;
  static toObject(includeInstance: boolean, msg: Member): Member.AsObject;
  static serializeBinaryToWriter(message: Member, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Member;
  static deserializeBinaryFromReader(message: Member, reader: jspb.BinaryReader): Member;
}

export namespace Member {
  export type AsObject = {
    userId: number,
    memberId: number,
    displayName: string,
    username: string,
    email: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: Member.Status,
  }

  export enum Status { 
    MEMBER_STATUS_UNSPECIFIED = 0,
    MEMBER_STATUS_WAITING = 1,
    MEMBER_STATUS_BANNED = 2,
    MEMBER_STATUS_ACTIVE = 3,
    MEMBER_STATUS_REJECTED = 4,
  }
}

export class ChallengeInfo extends jspb.Message {
  getId(): number;
  setId(value: number): ChallengeInfo;

  getName(): string;
  setName(value: string): ChallengeInfo;

  getDescription(): string;
  setDescription(value: string): ChallengeInfo;

  getRulesList(): Array<Rule>;
  setRulesList(value: Array<Rule>): ChallengeInfo;
  clearRulesList(): ChallengeInfo;
  addRules(value: Rule, index?: number): ChallengeInfo;

  getType(): ActivityType;
  setType(value: ActivityType): ChallengeInfo;

  getGoal(): number;
  setGoal(value: number): ChallengeInfo;

  getTotal(): number;
  setTotal(value: number): ChallengeInfo;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): ChallengeInfo;
  hasFrom(): boolean;
  clearFrom(): ChallengeInfo;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): ChallengeInfo;
  hasTo(): boolean;
  clearTo(): ChallengeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChallengeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ChallengeInfo): ChallengeInfo.AsObject;
  static serializeBinaryToWriter(message: ChallengeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChallengeInfo;
  static deserializeBinaryFromReader(message: ChallengeInfo, reader: jspb.BinaryReader): ChallengeInfo;
}

export namespace ChallengeInfo {
  export type AsObject = {
    id: number,
    name: string,
    description: string,
    rulesList: Array<Rule>,
    type: ActivityType,
    goal: number,
    total: number,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class EventInfo extends jspb.Message {
  getId(): number;
  setId(value: number): EventInfo;

  getName(): string;
  setName(value: string): EventInfo;

  getDescription(): string;
  setDescription(value: string): EventInfo;

  getRulesList(): Array<Rule>;
  setRulesList(value: Array<Rule>): EventInfo;
  clearRulesList(): EventInfo;
  addRules(value: Rule, index?: number): EventInfo;

  getType(): ActivityType;
  setType(value: ActivityType): EventInfo;

  getGoal(): number;
  setGoal(value: number): EventInfo;

  getTotal(): number;
  setTotal(value: number): EventInfo;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): EventInfo;
  hasFrom(): boolean;
  clearFrom(): EventInfo;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): EventInfo;
  hasTo(): boolean;
  clearTo(): EventInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventInfo): EventInfo.AsObject;
  static serializeBinaryToWriter(message: EventInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventInfo;
  static deserializeBinaryFromReader(message: EventInfo, reader: jspb.BinaryReader): EventInfo;
}

export namespace EventInfo {
  export type AsObject = {
    id: number,
    name: string,
    description: string,
    rulesList: Array<Rule>,
    type: ActivityType,
    goal: number,
    total: number,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export enum Rule { 
  RULE_UNSPECIFIED = 0,
  RULE_TOTAL_DISTANCE = 1,
  RULE_TOTAL_TIME = 2,
  RULE_TOTAL_CALORIES = 3,
}
export enum ActivityType { 
  ACTIVITY_TYPE_UNSPECIFIED = 0,
  ACTIVITY_TYPE_RUNNING = 1,
  ACTIVITY_TYPE_CYCLING = 2,
  ACTIVITY_TYPE_WALKING = 3,
}
export enum GroupSortBy { 
  GROUP_SORT_BY_UNSPECIFIED = 0,
  GROUP_SORT_BY_CREATED_TIME = 1,
  GROUP_SORT_BY_NAME = 2,
}
