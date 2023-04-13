import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class GetInProgressSeasonRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInProgressSeasonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInProgressSeasonRequest): GetInProgressSeasonRequest.AsObject;
  static serializeBinaryToWriter(message: GetInProgressSeasonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInProgressSeasonRequest;
  static deserializeBinaryFromReader(message: GetInProgressSeasonRequest, reader: jspb.BinaryReader): GetInProgressSeasonRequest;
}

export namespace GetInProgressSeasonRequest {
  export type AsObject = {
  }
}

export class GetInProgressSeasonReply extends jspb.Message {
  getSeasoninfo(): SeasonInfo | undefined;
  setSeasoninfo(value?: SeasonInfo): GetInProgressSeasonReply;
  hasSeasoninfo(): boolean;
  clearSeasoninfo(): GetInProgressSeasonReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInProgressSeasonReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetInProgressSeasonReply): GetInProgressSeasonReply.AsObject;
  static serializeBinaryToWriter(message: GetInProgressSeasonReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInProgressSeasonReply;
  static deserializeBinaryFromReader(message: GetInProgressSeasonReply, reader: jspb.BinaryReader): GetInProgressSeasonReply;
}

export namespace GetInProgressSeasonReply {
  export type AsObject = {
    seasoninfo?: SeasonInfo.AsObject,
  }
}

export class ListInProgressChallengeRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): ListInProgressChallengeRequest;

  getActivitytype(): ActivityType;
  setActivitytype(value: ActivityType): ListInProgressChallengeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInProgressChallengeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInProgressChallengeRequest): ListInProgressChallengeRequest.AsObject;
  static serializeBinaryToWriter(message: ListInProgressChallengeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInProgressChallengeRequest;
  static deserializeBinaryFromReader(message: ListInProgressChallengeRequest, reader: jspb.BinaryReader): ListInProgressChallengeRequest;
}

export namespace ListInProgressChallengeRequest {
  export type AsObject = {
    userId: number,
    activitytype: ActivityType,
  }
}

export class ListInProgressChallengeReply extends jspb.Message {
  getChallengeInfoListList(): Array<ChallengeInfo>;
  setChallengeInfoListList(value: Array<ChallengeInfo>): ListInProgressChallengeReply;
  clearChallengeInfoListList(): ListInProgressChallengeReply;
  addChallengeInfoList(value?: ChallengeInfo, index?: number): ChallengeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInProgressChallengeReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListInProgressChallengeReply): ListInProgressChallengeReply.AsObject;
  static serializeBinaryToWriter(message: ListInProgressChallengeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInProgressChallengeReply;
  static deserializeBinaryFromReader(message: ListInProgressChallengeReply, reader: jspb.BinaryReader): ListInProgressChallengeReply;
}

export namespace ListInProgressChallengeReply {
  export type AsObject = {
    challengeInfoListList: Array<ChallengeInfo.AsObject>,
  }
}

export class SeasonInfo extends jspb.Message {
  getId(): number;
  setId(value: number): SeasonInfo;

  getName(): string;
  setName(value: string): SeasonInfo;

  getDescription(): string;
  setDescription(value: string): SeasonInfo;

  getPicture(): string;
  setPicture(value: string): SeasonInfo;

  getStatus(): RuleStatus;
  setStatus(value: RuleStatus): SeasonInfo;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): SeasonInfo;
  hasFrom(): boolean;
  clearFrom(): SeasonInfo;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): SeasonInfo;
  hasTo(): boolean;
  clearTo(): SeasonInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeasonInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SeasonInfo): SeasonInfo.AsObject;
  static serializeBinaryToWriter(message: SeasonInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeasonInfo;
  static deserializeBinaryFromReader(message: SeasonInfo, reader: jspb.BinaryReader): SeasonInfo;
}

export namespace SeasonInfo {
  export type AsObject = {
    id: number,
    name: string,
    description: string,
    picture: string,
    status: RuleStatus,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetSeasonRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetSeasonRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSeasonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSeasonRequest): GetSeasonRequest.AsObject;
  static serializeBinaryToWriter(message: GetSeasonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSeasonRequest;
  static deserializeBinaryFromReader(message: GetSeasonRequest, reader: jspb.BinaryReader): GetSeasonRequest;
}

export namespace GetSeasonRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetSeasonReply extends jspb.Message {
  getSeasoninfo(): SeasonInfo | undefined;
  setSeasoninfo(value?: SeasonInfo): GetSeasonReply;
  hasSeasoninfo(): boolean;
  clearSeasoninfo(): GetSeasonReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSeasonReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetSeasonReply): GetSeasonReply.AsObject;
  static serializeBinaryToWriter(message: GetSeasonReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSeasonReply;
  static deserializeBinaryFromReader(message: GetSeasonReply, reader: jspb.BinaryReader): GetSeasonReply;
}

export namespace GetSeasonReply {
  export type AsObject = {
    seasoninfo?: SeasonInfo.AsObject,
  }
}

export class CreateSeasonRequest extends jspb.Message {
  getSeasoninfo(): SeasonInfo | undefined;
  setSeasoninfo(value?: SeasonInfo): CreateSeasonRequest;
  hasSeasoninfo(): boolean;
  clearSeasoninfo(): CreateSeasonRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSeasonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSeasonRequest): CreateSeasonRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSeasonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSeasonRequest;
  static deserializeBinaryFromReader(message: CreateSeasonRequest, reader: jspb.BinaryReader): CreateSeasonRequest;
}

export namespace CreateSeasonRequest {
  export type AsObject = {
    seasoninfo?: SeasonInfo.AsObject,
  }
}

export class CreateSeasonReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSeasonReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSeasonReply): CreateSeasonReply.AsObject;
  static serializeBinaryToWriter(message: CreateSeasonReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSeasonReply;
  static deserializeBinaryFromReader(message: CreateSeasonReply, reader: jspb.BinaryReader): CreateSeasonReply;
}

export namespace CreateSeasonReply {
  export type AsObject = {
  }
}

export class ListSeasonRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): ListSeasonRequest;

  getOffset(): number;
  setOffset(value: number): ListSeasonRequest;

  getAscending(): boolean;
  setAscending(value: boolean): ListSeasonRequest;

  getSortBy(): ListSeasonRequest.SeasonSortBy;
  setSortBy(value: ListSeasonRequest.SeasonSortBy): ListSeasonRequest;

  getSearchByName(): string;
  setSearchByName(value: string): ListSeasonRequest;

  getStatus(): RuleStatus;
  setStatus(value: RuleStatus): ListSeasonRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): ListSeasonRequest;
  hasFrom(): boolean;
  clearFrom(): ListSeasonRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): ListSeasonRequest;
  hasTo(): boolean;
  clearTo(): ListSeasonRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSeasonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSeasonRequest): ListSeasonRequest.AsObject;
  static serializeBinaryToWriter(message: ListSeasonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSeasonRequest;
  static deserializeBinaryFromReader(message: ListSeasonRequest, reader: jspb.BinaryReader): ListSeasonRequest;
}

export namespace ListSeasonRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    ascending: boolean,
    sortBy: ListSeasonRequest.SeasonSortBy,
    searchByName: string,
    status: RuleStatus,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum SeasonSortBy { 
    SEASON_SORT_BY_UNSPECIFIED = 0,
    SEASON_SORT_BY_START_TIME = 1,
    SEASON_SORT_BY_END_TIME = 2,
    SEASON_SORT_BY_NAME = 3,
  }
}

export class ListSeasonReply extends jspb.Message {
  getSeasoninfolistList(): Array<SeasonInfo>;
  setSeasoninfolistList(value: Array<SeasonInfo>): ListSeasonReply;
  clearSeasoninfolistList(): ListSeasonReply;
  addSeasoninfolist(value?: SeasonInfo, index?: number): SeasonInfo;

  getTotal(): number;
  setTotal(value: number): ListSeasonReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSeasonReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListSeasonReply): ListSeasonReply.AsObject;
  static serializeBinaryToWriter(message: ListSeasonReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSeasonReply;
  static deserializeBinaryFromReader(message: ListSeasonReply, reader: jspb.BinaryReader): ListSeasonReply;
}

export namespace ListSeasonReply {
  export type AsObject = {
    seasoninfolistList: Array<SeasonInfo.AsObject>,
    total: number,
  }
}

export class UpdateSeasonRequest extends jspb.Message {
  getSeasoninfo(): SeasonInfo | undefined;
  setSeasoninfo(value?: SeasonInfo): UpdateSeasonRequest;
  hasSeasoninfo(): boolean;
  clearSeasoninfo(): UpdateSeasonRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSeasonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSeasonRequest): UpdateSeasonRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSeasonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSeasonRequest;
  static deserializeBinaryFromReader(message: UpdateSeasonRequest, reader: jspb.BinaryReader): UpdateSeasonRequest;
}

export namespace UpdateSeasonRequest {
  export type AsObject = {
    seasoninfo?: SeasonInfo.AsObject,
  }
}

export class UpdateSeasonReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSeasonReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSeasonReply): UpdateSeasonReply.AsObject;
  static serializeBinaryToWriter(message: UpdateSeasonReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSeasonReply;
  static deserializeBinaryFromReader(message: UpdateSeasonReply, reader: jspb.BinaryReader): UpdateSeasonReply;
}

export namespace UpdateSeasonReply {
  export type AsObject = {
  }
}

export class DeleteSeasonRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteSeasonRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSeasonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSeasonRequest): DeleteSeasonRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSeasonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSeasonRequest;
  static deserializeBinaryFromReader(message: DeleteSeasonRequest, reader: jspb.BinaryReader): DeleteSeasonRequest;
}

export namespace DeleteSeasonRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteSeasonReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSeasonReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSeasonReply): DeleteSeasonReply.AsObject;
  static serializeBinaryToWriter(message: DeleteSeasonReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSeasonReply;
  static deserializeBinaryFromReader(message: DeleteSeasonReply, reader: jspb.BinaryReader): DeleteSeasonReply;
}

export namespace DeleteSeasonReply {
  export type AsObject = {
  }
}

export class GetChallengeRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetChallengeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChallengeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetChallengeRequest): GetChallengeRequest.AsObject;
  static serializeBinaryToWriter(message: GetChallengeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChallengeRequest;
  static deserializeBinaryFromReader(message: GetChallengeRequest, reader: jspb.BinaryReader): GetChallengeRequest;
}

export namespace GetChallengeRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetChallengeReply extends jspb.Message {
  getChallengeinfo(): ChallengeInfo | undefined;
  setChallengeinfo(value?: ChallengeInfo): GetChallengeReply;
  hasChallengeinfo(): boolean;
  clearChallengeinfo(): GetChallengeReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChallengeReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetChallengeReply): GetChallengeReply.AsObject;
  static serializeBinaryToWriter(message: GetChallengeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChallengeReply;
  static deserializeBinaryFromReader(message: GetChallengeReply, reader: jspb.BinaryReader): GetChallengeReply;
}

export namespace GetChallengeReply {
  export type AsObject = {
    challengeinfo?: ChallengeInfo.AsObject,
  }
}

export class CreateChallengeRequest extends jspb.Message {
  getChallengeinfo(): ChallengeInfo | undefined;
  setChallengeinfo(value?: ChallengeInfo): CreateChallengeRequest;
  hasChallengeinfo(): boolean;
  clearChallengeinfo(): CreateChallengeRequest;

  getGroupId(): number;
  setGroupId(value: number): CreateChallengeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChallengeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChallengeRequest): CreateChallengeRequest.AsObject;
  static serializeBinaryToWriter(message: CreateChallengeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChallengeRequest;
  static deserializeBinaryFromReader(message: CreateChallengeRequest, reader: jspb.BinaryReader): CreateChallengeRequest;
}

export namespace CreateChallengeRequest {
  export type AsObject = {
    challengeinfo?: ChallengeInfo.AsObject,
    groupId: number,
  }
}

export class CreateChallengeReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChallengeReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChallengeReply): CreateChallengeReply.AsObject;
  static serializeBinaryToWriter(message: CreateChallengeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChallengeReply;
  static deserializeBinaryFromReader(message: CreateChallengeReply, reader: jspb.BinaryReader): CreateChallengeReply;
}

export namespace CreateChallengeReply {
  export type AsObject = {
  }
}

export class ListChallengeRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): ListChallengeRequest;

  getOffset(): number;
  setOffset(value: number): ListChallengeRequest;

  getAscending(): boolean;
  setAscending(value: boolean): ListChallengeRequest;

  getGroupId(): number;
  setGroupId(value: number): ListChallengeRequest;

  getSortBy(): ListChallengeRequest.ChallengeSortBy;
  setSortBy(value: ListChallengeRequest.ChallengeSortBy): ListChallengeRequest;

  getSearchByName(): string;
  setSearchByName(value: string): ListChallengeRequest;

  getFilterByRulesList(): Array<Rule>;
  setFilterByRulesList(value: Array<Rule>): ListChallengeRequest;
  clearFilterByRulesList(): ListChallengeRequest;
  addFilterByRules(value: Rule, index?: number): ListChallengeRequest;

  getFilterByType(): ActivityType;
  setFilterByType(value: ActivityType): ListChallengeRequest;

  getStatus(): RuleStatus;
  setStatus(value: RuleStatus): ListChallengeRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): ListChallengeRequest;
  hasFrom(): boolean;
  clearFrom(): ListChallengeRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): ListChallengeRequest;
  hasTo(): boolean;
  clearTo(): ListChallengeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListChallengeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListChallengeRequest): ListChallengeRequest.AsObject;
  static serializeBinaryToWriter(message: ListChallengeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListChallengeRequest;
  static deserializeBinaryFromReader(message: ListChallengeRequest, reader: jspb.BinaryReader): ListChallengeRequest;
}

export namespace ListChallengeRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    ascending: boolean,
    groupId: number,
    sortBy: ListChallengeRequest.ChallengeSortBy,
    searchByName: string,
    filterByRulesList: Array<Rule>,
    filterByType: ActivityType,
    status: RuleStatus,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum ChallengeSortBy { 
    CHALLENGE_SORT_BY_UNSPECIFIED = 0,
    CHALLENGE_SORT_BY_START_TIME = 1,
    CHALLENGE_SORT_BY_END_TIME = 2,
    CHALLENGE_SORT_BY_NAME = 3,
  }
}

export class ListChallengeReply extends jspb.Message {
  getChallengeinfolistList(): Array<ChallengeInfo>;
  setChallengeinfolistList(value: Array<ChallengeInfo>): ListChallengeReply;
  clearChallengeinfolistList(): ListChallengeReply;
  addChallengeinfolist(value?: ChallengeInfo, index?: number): ChallengeInfo;

  getTotal(): number;
  setTotal(value: number): ListChallengeReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListChallengeReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListChallengeReply): ListChallengeReply.AsObject;
  static serializeBinaryToWriter(message: ListChallengeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListChallengeReply;
  static deserializeBinaryFromReader(message: ListChallengeReply, reader: jspb.BinaryReader): ListChallengeReply;
}

export namespace ListChallengeReply {
  export type AsObject = {
    challengeinfolistList: Array<ChallengeInfo.AsObject>,
    total: number,
  }
}

export class UpdateChallengeRequest extends jspb.Message {
  getChallengeinfo(): ChallengeInfo | undefined;
  setChallengeinfo(value?: ChallengeInfo): UpdateChallengeRequest;
  hasChallengeinfo(): boolean;
  clearChallengeinfo(): UpdateChallengeRequest;

  getGroupId(): number;
  setGroupId(value: number): UpdateChallengeRequest;

  getIdsRuleToDeleteList(): Array<number>;
  setIdsRuleToDeleteList(value: Array<number>): UpdateChallengeRequest;
  clearIdsRuleToDeleteList(): UpdateChallengeRequest;
  addIdsRuleToDelete(value: number, index?: number): UpdateChallengeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChallengeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChallengeRequest): UpdateChallengeRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateChallengeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChallengeRequest;
  static deserializeBinaryFromReader(message: UpdateChallengeRequest, reader: jspb.BinaryReader): UpdateChallengeRequest;
}

export namespace UpdateChallengeRequest {
  export type AsObject = {
    challengeinfo?: ChallengeInfo.AsObject,
    groupId: number,
    idsRuleToDeleteList: Array<number>,
  }
}

export class UpdateChallengeReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChallengeReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChallengeReply): UpdateChallengeReply.AsObject;
  static serializeBinaryToWriter(message: UpdateChallengeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChallengeReply;
  static deserializeBinaryFromReader(message: UpdateChallengeReply, reader: jspb.BinaryReader): UpdateChallengeReply;
}

export namespace UpdateChallengeReply {
  export type AsObject = {
  }
}

export class DeleteChallengeRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteChallengeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteChallengeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteChallengeRequest): DeleteChallengeRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteChallengeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteChallengeRequest;
  static deserializeBinaryFromReader(message: DeleteChallengeRequest, reader: jspb.BinaryReader): DeleteChallengeRequest;
}

export namespace DeleteChallengeRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteChallengeReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteChallengeReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteChallengeReply): DeleteChallengeReply.AsObject;
  static serializeBinaryToWriter(message: DeleteChallengeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteChallengeReply;
  static deserializeBinaryFromReader(message: DeleteChallengeReply, reader: jspb.BinaryReader): DeleteChallengeReply;
}

export namespace DeleteChallengeReply {
  export type AsObject = {
  }
}

export class ListUserRankingRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): ListUserRankingRequest;

  getOffset(): number;
  setOffset(value: number): ListUserRankingRequest;

  getAscending(): boolean;
  setAscending(value: boolean): ListUserRankingRequest;

  getGroupId(): number;
  setGroupId(value: number): ListUserRankingRequest;

  getSeasonId(): number;
  setSeasonId(value: number): ListUserRankingRequest;

  getSortby(): ListUserRankingRequest.SortBy;
  setSortby(value: ListUserRankingRequest.SortBy): ListUserRankingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserRankingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserRankingRequest): ListUserRankingRequest.AsObject;
  static serializeBinaryToWriter(message: ListUserRankingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserRankingRequest;
  static deserializeBinaryFromReader(message: ListUserRankingRequest, reader: jspb.BinaryReader): ListUserRankingRequest;
}

export namespace ListUserRankingRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    ascending: boolean,
    groupId: number,
    seasonId: number,
    sortby: ListUserRankingRequest.SortBy,
  }

  export enum SortBy { 
    SORT_BY_UNSPECIFIED = 0,
    SORT_BY_POINT = 1,
    SORT_BY_COUNT_CHALLENGE_COMPLETED = 2,
  }
}

export class ListUserRankingReply extends jspb.Message {
  getSeasoninfo(): SeasonInfo | undefined;
  setSeasoninfo(value?: SeasonInfo): ListUserRankingReply;
  hasSeasoninfo(): boolean;
  clearSeasoninfo(): ListUserRankingReply;

  getUserrankinglistList(): Array<UserRanking>;
  setUserrankinglistList(value: Array<UserRanking>): ListUserRankingReply;
  clearUserrankinglistList(): ListUserRankingReply;
  addUserrankinglist(value?: UserRanking, index?: number): UserRanking;

  getTotal(): number;
  setTotal(value: number): ListUserRankingReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserRankingReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserRankingReply): ListUserRankingReply.AsObject;
  static serializeBinaryToWriter(message: ListUserRankingReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserRankingReply;
  static deserializeBinaryFromReader(message: ListUserRankingReply, reader: jspb.BinaryReader): ListUserRankingReply;
}

export namespace ListUserRankingReply {
  export type AsObject = {
    seasoninfo?: SeasonInfo.AsObject,
    userrankinglistList: Array<UserRanking.AsObject>,
    total: number,
  }
}

export class UserRanking extends jspb.Message {
  getMember(): Member | undefined;
  setMember(value?: Member): UserRanking;
  hasMember(): boolean;
  clearMember(): UserRanking;

  getPoint(): number;
  setPoint(value: number): UserRanking;

  getCountChallengeCompleted(): number;
  setCountChallengeCompleted(value: number): UserRanking;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRanking.AsObject;
  static toObject(includeInstance: boolean, msg: UserRanking): UserRanking.AsObject;
  static serializeBinaryToWriter(message: UserRanking, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRanking;
  static deserializeBinaryFromReader(message: UserRanking, reader: jspb.BinaryReader): UserRanking;
}

export namespace UserRanking {
  export type AsObject = {
    member?: Member.AsObject,
    point: number,
    countChallengeCompleted: number,
  }
}

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

  getIsAdmin(): boolean;
  setIsAdmin(value: boolean): Member;

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
    isAdmin: boolean,
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

  getGroupId(): number;
  setGroupId(value: number): ChallengeInfo;

  getCompletedFirstMember(): Member | undefined;
  setCompletedFirstMember(value?: Member): ChallengeInfo;
  hasCompletedFirstMember(): boolean;
  clearCompletedFirstMember(): ChallengeInfo;

  getMemberProgressListList(): Array<MemberProgress>;
  setMemberProgressListList(value: Array<MemberProgress>): ChallengeInfo;
  clearMemberProgressListList(): ChallengeInfo;
  addMemberProgressList(value?: MemberProgress, index?: number): MemberProgress;

  getName(): string;
  setName(value: string): ChallengeInfo;

  getDescription(): string;
  setDescription(value: string): ChallengeInfo;

  getPicture(): string;
  setPicture(value: string): ChallengeInfo;

  getChallengerulesList(): Array<ChallengeRuleInfo>;
  setChallengerulesList(value: Array<ChallengeRuleInfo>): ChallengeInfo;
  clearChallengerulesList(): ChallengeInfo;
  addChallengerules(value?: ChallengeRuleInfo, index?: number): ChallengeRuleInfo;

  getType(): ActivityType;
  setType(value: ActivityType): ChallengeInfo;

  getStatus(): RuleStatus;
  setStatus(value: RuleStatus): ChallengeInfo;

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
    groupId: number,
    completedFirstMember?: Member.AsObject,
    memberProgressListList: Array<MemberProgress.AsObject>,
    name: string,
    description: string,
    picture: string,
    challengerulesList: Array<ChallengeRuleInfo.AsObject>,
    type: ActivityType,
    status: RuleStatus,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class MemberProgress extends jspb.Message {
  getIsCompletedFirst(): boolean;
  setIsCompletedFirst(value: boolean): MemberProgress;

  getChallengeProgress(): RuleStatus;
  setChallengeProgress(value: RuleStatus): MemberProgress;

  getMemberInfo(): Member | undefined;
  setMemberInfo(value?: Member): MemberProgress;
  hasMemberInfo(): boolean;
  clearMemberInfo(): MemberProgress;

  getRuleProgressListList(): Array<MemberProgress.RuleProgress>;
  setRuleProgressListList(value: Array<MemberProgress.RuleProgress>): MemberProgress;
  clearRuleProgressListList(): MemberProgress;
  addRuleProgressList(value?: MemberProgress.RuleProgress, index?: number): MemberProgress.RuleProgress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberProgress.AsObject;
  static toObject(includeInstance: boolean, msg: MemberProgress): MemberProgress.AsObject;
  static serializeBinaryToWriter(message: MemberProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberProgress;
  static deserializeBinaryFromReader(message: MemberProgress, reader: jspb.BinaryReader): MemberProgress;
}

export namespace MemberProgress {
  export type AsObject = {
    isCompletedFirst: boolean,
    challengeProgress: RuleStatus,
    memberInfo?: Member.AsObject,
    ruleProgressListList: Array<MemberProgress.RuleProgress.AsObject>,
  }

  export class RuleProgress extends jspb.Message {
    getRule(): Rule;
    setRule(value: Rule): RuleProgress;

    getStatus(): RuleStatus;
    setStatus(value: RuleStatus): RuleProgress;

    getTotal(): number;
    setTotal(value: number): RuleProgress;

    getTimeCompleted(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimeCompleted(value?: google_protobuf_timestamp_pb.Timestamp): RuleProgress;
    hasTimeCompleted(): boolean;
    clearTimeCompleted(): RuleProgress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RuleProgress.AsObject;
    static toObject(includeInstance: boolean, msg: RuleProgress): RuleProgress.AsObject;
    static serializeBinaryToWriter(message: RuleProgress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RuleProgress;
    static deserializeBinaryFromReader(message: RuleProgress, reader: jspb.BinaryReader): RuleProgress;
  }

  export namespace RuleProgress {
    export type AsObject = {
      rule: Rule,
      status: RuleStatus,
      total: number,
      timeCompleted?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export class ChallengeRuleInfo extends jspb.Message {
  getId(): number;
  setId(value: number): ChallengeRuleInfo;

  getGoal(): number;
  setGoal(value: number): ChallengeRuleInfo;

  getRule(): Rule;
  setRule(value: Rule): ChallengeRuleInfo;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ChallengeRuleInfo;
  hasCreatedAt(): boolean;
  clearCreatedAt(): ChallengeRuleInfo;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ChallengeRuleInfo;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): ChallengeRuleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChallengeRuleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ChallengeRuleInfo): ChallengeRuleInfo.AsObject;
  static serializeBinaryToWriter(message: ChallengeRuleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChallengeRuleInfo;
  static deserializeBinaryFromReader(message: ChallengeRuleInfo, reader: jspb.BinaryReader): ChallengeRuleInfo;
}

export namespace ChallengeRuleInfo {
  export type AsObject = {
    id: number,
    goal: number,
    rule: Rule,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
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

export class ChallengeProgress extends jspb.Message {
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): ChallengeProgress;
  hasTimestamp(): boolean;
  clearTimestamp(): ChallengeProgress;

  getValue(): number;
  setValue(value: number): ChallengeProgress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChallengeProgress.AsObject;
  static toObject(includeInstance: boolean, msg: ChallengeProgress): ChallengeProgress.AsObject;
  static serializeBinaryToWriter(message: ChallengeProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChallengeProgress;
  static deserializeBinaryFromReader(message: ChallengeProgress, reader: jspb.BinaryReader): ChallengeProgress;
}

export namespace ChallengeProgress {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    value: number,
  }
}

export enum Rule { 
  RULE_UNSPECIFIED = 0,
  RULE_TOTAL_DISTANCE = 1,
  RULE_TOTAL_TIME = 2,
  RULE_TOTAL_CALORIES = 3,
}
export enum RuleStatus { 
  RULE_STATUS_UNSPECIFIED = 0,
  RULE_STATUS_COMPLETED = 2,
  RULE_STATUS_INPROGRESS = 3,
  RULE_STATUS_COMING_SOON = 4,
  RULE_STATUS_FAILED = 1,
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
