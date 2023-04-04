import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class TrackPoint extends jspb.Message {
  getLongtitude(): number;
  setLongtitude(value: number): TrackPoint;

  getLatitude(): number;
  setLatitude(value: number): TrackPoint;

  getAltitude(): number;
  setAltitude(value: number): TrackPoint;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): TrackPoint;
  hasCreatedAt(): boolean;
  clearCreatedAt(): TrackPoint;

  getIsStopPoint(): boolean;
  setIsStopPoint(value: boolean): TrackPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrackPoint.AsObject;
  static toObject(includeInstance: boolean, msg: TrackPoint): TrackPoint.AsObject;
  static serializeBinaryToWriter(message: TrackPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrackPoint;
  static deserializeBinaryFromReader(message: TrackPoint, reader: jspb.BinaryReader): TrackPoint;
}

export namespace TrackPoint {
  export type AsObject = {
    longtitude: number,
    latitude: number,
    altitude: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isStopPoint: boolean,
  }
}

export class ActivityInfo extends jspb.Message {
  getId(): number;
  setId(value: number): ActivityInfo;

  getType(): ActivityType;
  setType(value: ActivityType): ActivityInfo;

  getTotalDistance(): number;
  setTotalDistance(value: number): ActivityInfo;

  getKcal(): number;
  setKcal(value: number): ActivityInfo;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): ActivityInfo;
  hasStartTime(): boolean;
  clearStartTime(): ActivityInfo;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): ActivityInfo;
  hasEndTime(): boolean;
  clearEndTime(): ActivityInfo;

  getDuration(): number;
  setDuration(value: number): ActivityInfo;

  getRouteList(): Array<TrackPoint>;
  setRouteList(value: Array<TrackPoint>): ActivityInfo;
  clearRouteList(): ActivityInfo;
  addRoute(value?: TrackPoint, index?: number): TrackPoint;

  getActivityName(): string;
  setActivityName(value: string): ActivityInfo;

  getActivityNote(): string;
  setActivityNote(value: string): ActivityInfo;

  getCommitType(): CommitType;
  setCommitType(value: CommitType): ActivityInfo;

  getCommitId(): number;
  setCommitId(value: number): ActivityInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityInfo): ActivityInfo.AsObject;
  static serializeBinaryToWriter(message: ActivityInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityInfo;
  static deserializeBinaryFromReader(message: ActivityInfo, reader: jspb.BinaryReader): ActivityInfo;
}

export namespace ActivityInfo {
  export type AsObject = {
    id: number,
    type: ActivityType,
    totalDistance: number,
    kcal: number,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    duration: number,
    routeList: Array<TrackPoint.AsObject>,
    activityName: string,
    activityNote: string,
    commitType: CommitType,
    commitId: number,
  }
}

export class CreateActivityInfoRequest extends jspb.Message {
  getActivityInfo(): ActivityInfo | undefined;
  setActivityInfo(value?: ActivityInfo): CreateActivityInfoRequest;
  hasActivityInfo(): boolean;
  clearActivityInfo(): CreateActivityInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateActivityInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateActivityInfoRequest): CreateActivityInfoRequest.AsObject;
  static serializeBinaryToWriter(message: CreateActivityInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateActivityInfoRequest;
  static deserializeBinaryFromReader(message: CreateActivityInfoRequest, reader: jspb.BinaryReader): CreateActivityInfoRequest;
}

export namespace CreateActivityInfoRequest {
  export type AsObject = {
    activityInfo?: ActivityInfo.AsObject,
  }
}

export class CreateActivityInfoReply extends jspb.Message {
  getIdCreated(): number;
  setIdCreated(value: number): CreateActivityInfoReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateActivityInfoReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateActivityInfoReply): CreateActivityInfoReply.AsObject;
  static serializeBinaryToWriter(message: CreateActivityInfoReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateActivityInfoReply;
  static deserializeBinaryFromReader(message: CreateActivityInfoReply, reader: jspb.BinaryReader): CreateActivityInfoReply;
}

export namespace CreateActivityInfoReply {
  export type AsObject = {
    idCreated: number,
  }
}

export class ListActivityInfoRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): ListActivityInfoRequest;

  getOffset(): number;
  setOffset(value: number): ListActivityInfoRequest;

  getAscending(): boolean;
  setAscending(value: boolean): ListActivityInfoRequest;

  getSortBy(): ActivitySortBy;
  setSortBy(value: ActivitySortBy): ListActivityInfoRequest;

  getActivityType(): ActivityType;
  setActivityType(value: ActivityType): ListActivityInfoRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): ListActivityInfoRequest;
  hasFrom(): boolean;
  clearFrom(): ListActivityInfoRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): ListActivityInfoRequest;
  hasTo(): boolean;
  clearTo(): ListActivityInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListActivityInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListActivityInfoRequest): ListActivityInfoRequest.AsObject;
  static serializeBinaryToWriter(message: ListActivityInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListActivityInfoRequest;
  static deserializeBinaryFromReader(message: ListActivityInfoRequest, reader: jspb.BinaryReader): ListActivityInfoRequest;
}

export namespace ListActivityInfoRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    ascending: boolean,
    sortBy: ActivitySortBy,
    activityType: ActivityType,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListActivityInfoReply extends jspb.Message {
  getActivityListList(): Array<ActivityInfo>;
  setActivityListList(value: Array<ActivityInfo>): ListActivityInfoReply;
  clearActivityListList(): ListActivityInfoReply;
  addActivityList(value?: ActivityInfo, index?: number): ActivityInfo;

  getTotal(): number;
  setTotal(value: number): ListActivityInfoReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListActivityInfoReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListActivityInfoReply): ListActivityInfoReply.AsObject;
  static serializeBinaryToWriter(message: ListActivityInfoReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListActivityInfoReply;
  static deserializeBinaryFromReader(message: ListActivityInfoReply, reader: jspb.BinaryReader): ListActivityInfoReply;
}

export namespace ListActivityInfoReply {
  export type AsObject = {
    activityListList: Array<ActivityInfo.AsObject>,
    total: number,
  }
}

export class DeleteActivityInfoRequest extends jspb.Message {
  getIdsToDeleteList(): Array<number>;
  setIdsToDeleteList(value: Array<number>): DeleteActivityInfoRequest;
  clearIdsToDeleteList(): DeleteActivityInfoRequest;
  addIdsToDelete(value: number, index?: number): DeleteActivityInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteActivityInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteActivityInfoRequest): DeleteActivityInfoRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteActivityInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteActivityInfoRequest;
  static deserializeBinaryFromReader(message: DeleteActivityInfoRequest, reader: jspb.BinaryReader): DeleteActivityInfoRequest;
}

export namespace DeleteActivityInfoRequest {
  export type AsObject = {
    idsToDeleteList: Array<number>,
  }
}

export class DeleteActivityInfoReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteActivityInfoReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteActivityInfoReply): DeleteActivityInfoReply.AsObject;
  static serializeBinaryToWriter(message: DeleteActivityInfoReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteActivityInfoReply;
  static deserializeBinaryFromReader(message: DeleteActivityInfoReply, reader: jspb.BinaryReader): DeleteActivityInfoReply;
}

export namespace DeleteActivityInfoReply {
  export type AsObject = {
  }
}

export class GetActivityStatisticRequest extends jspb.Message {
  getType(): ActivityType;
  setType(value: ActivityType): GetActivityStatisticRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetActivityStatisticRequest;
  hasFrom(): boolean;
  clearFrom(): GetActivityStatisticRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetActivityStatisticRequest;
  hasTo(): boolean;
  clearTo(): GetActivityStatisticRequest;

  getGroupBy(): GetActivityStatisticRequest.GroupBy;
  setGroupBy(value: GetActivityStatisticRequest.GroupBy): GetActivityStatisticRequest;

  getTz(): number;
  setTz(value: number): GetActivityStatisticRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActivityStatisticRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetActivityStatisticRequest): GetActivityStatisticRequest.AsObject;
  static serializeBinaryToWriter(message: GetActivityStatisticRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActivityStatisticRequest;
  static deserializeBinaryFromReader(message: GetActivityStatisticRequest, reader: jspb.BinaryReader): GetActivityStatisticRequest;
}

export namespace GetActivityStatisticRequest {
  export type AsObject = {
    type: ActivityType,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    groupBy: GetActivityStatisticRequest.GroupBy,
    tz: number,
  }

  export enum GroupBy { 
    GROUP_BY_UNSPECIFIED = 0,
    GROUP_BY_DAY = 1,
    GROUP_BY_WEEK = 2,
    GORUP_BY_MONTH = 3,
    GORUP_BY_YEAR = 5,
  }
}

export class GetActivityStatisticReply extends jspb.Message {
  getDataList(): Array<ActivityStatisticData>;
  setDataList(value: Array<ActivityStatisticData>): GetActivityStatisticReply;
  clearDataList(): GetActivityStatisticReply;
  addData(value?: ActivityStatisticData, index?: number): ActivityStatisticData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActivityStatisticReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetActivityStatisticReply): GetActivityStatisticReply.AsObject;
  static serializeBinaryToWriter(message: GetActivityStatisticReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActivityStatisticReply;
  static deserializeBinaryFromReader(message: GetActivityStatisticReply, reader: jspb.BinaryReader): GetActivityStatisticReply;
}

export namespace GetActivityStatisticReply {
  export type AsObject = {
    dataList: Array<ActivityStatisticData.AsObject>,
  }
}

export class ActivityStatisticData extends jspb.Message {
  getDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDatetime(value?: google_protobuf_timestamp_pb.Timestamp): ActivityStatisticData;
  hasDatetime(): boolean;
  clearDatetime(): ActivityStatisticData;

  getTotalDistance(): number;
  setTotalDistance(value: number): ActivityStatisticData;

  getTotalDuration(): number;
  setTotalDuration(value: number): ActivityStatisticData;

  getNumberOfActivities(): number;
  setNumberOfActivities(value: number): ActivityStatisticData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityStatisticData.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityStatisticData): ActivityStatisticData.AsObject;
  static serializeBinaryToWriter(message: ActivityStatisticData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityStatisticData;
  static deserializeBinaryFromReader(message: ActivityStatisticData, reader: jspb.BinaryReader): ActivityStatisticData;
}

export namespace ActivityStatisticData {
  export type AsObject = {
    datetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    totalDistance: number,
    totalDuration: number,
    numberOfActivities: number,
  }
}

export class CommitActivityRequest extends jspb.Message {
  getActivityId(): number;
  setActivityId(value: number): CommitActivityRequest;

  getCommitId(): number;
  setCommitId(value: number): CommitActivityRequest;

  getCommitType(): CommitType;
  setCommitType(value: CommitType): CommitActivityRequest;

  getRule(): number;
  setRule(value: number): CommitActivityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitActivityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CommitActivityRequest): CommitActivityRequest.AsObject;
  static serializeBinaryToWriter(message: CommitActivityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitActivityRequest;
  static deserializeBinaryFromReader(message: CommitActivityRequest, reader: jspb.BinaryReader): CommitActivityRequest;
}

export namespace CommitActivityRequest {
  export type AsObject = {
    activityId: number,
    commitId: number,
    commitType: CommitType,
    rule: number,
  }
}

export class CommitActivityReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitActivityReply.AsObject;
  static toObject(includeInstance: boolean, msg: CommitActivityReply): CommitActivityReply.AsObject;
  static serializeBinaryToWriter(message: CommitActivityReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitActivityReply;
  static deserializeBinaryFromReader(message: CommitActivityReply, reader: jspb.BinaryReader): CommitActivityReply;
}

export namespace CommitActivityReply {
  export type AsObject = {
  }
}

export class GetUsersAchievementRequest extends jspb.Message {
  getUserIdsList(): Array<number>;
  setUserIdsList(value: Array<number>): GetUsersAchievementRequest;
  clearUserIdsList(): GetUsersAchievementRequest;
  addUserIds(value: number, index?: number): GetUsersAchievementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersAchievementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersAchievementRequest): GetUsersAchievementRequest.AsObject;
  static serializeBinaryToWriter(message: GetUsersAchievementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersAchievementRequest;
  static deserializeBinaryFromReader(message: GetUsersAchievementRequest, reader: jspb.BinaryReader): GetUsersAchievementRequest;
}

export namespace GetUsersAchievementRequest {
  export type AsObject = {
    userIdsList: Array<number>,
  }
}

export class GetUsersAchievementReply extends jspb.Message {
  getUserAchievementsMap(): jspb.Map<number, UserAchievement>;
  clearUserAchievementsMap(): GetUsersAchievementReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersAchievementReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersAchievementReply): GetUsersAchievementReply.AsObject;
  static serializeBinaryToWriter(message: GetUsersAchievementReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersAchievementReply;
  static deserializeBinaryFromReader(message: GetUsersAchievementReply, reader: jspb.BinaryReader): GetUsersAchievementReply;
}

export namespace GetUsersAchievementReply {
  export type AsObject = {
    userAchievementsMap: Array<[number, UserAchievement.AsObject]>,
  }
}

export class UserAchievement extends jspb.Message {
  getAchievementsMap(): jspb.Map<number, AchievementDetail>;
  clearAchievementsMap(): UserAchievement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserAchievement.AsObject;
  static toObject(includeInstance: boolean, msg: UserAchievement): UserAchievement.AsObject;
  static serializeBinaryToWriter(message: UserAchievement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserAchievement;
  static deserializeBinaryFromReader(message: UserAchievement, reader: jspb.BinaryReader): UserAchievement;
}

export namespace UserAchievement {
  export type AsObject = {
    achievementsMap: Array<[number, AchievementDetail.AsObject]>,
  }
}

export class AchievementDetail extends jspb.Message {
  getLevel(): AchievementLevel;
  setLevel(value: AchievementLevel): AchievementDetail;

  getNumberOfActivities(): number;
  setNumberOfActivities(value: number): AchievementDetail;

  getTotalDistance(): number;
  setTotalDistance(value: number): AchievementDetail;

  getTotalDuration(): number;
  setTotalDuration(value: number): AchievementDetail;

  getTotalKcal(): number;
  setTotalKcal(value: number): AchievementDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AchievementDetail.AsObject;
  static toObject(includeInstance: boolean, msg: AchievementDetail): AchievementDetail.AsObject;
  static serializeBinaryToWriter(message: AchievementDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AchievementDetail;
  static deserializeBinaryFromReader(message: AchievementDetail, reader: jspb.BinaryReader): AchievementDetail;
}

export namespace AchievementDetail {
  export type AsObject = {
    level: AchievementLevel,
    numberOfActivities: number,
    totalDistance: number,
    totalDuration: number,
    totalKcal: number,
  }
}

export enum ActivityType { 
  ACTIVITY_TYPE_UNSPECIFIED = 0,
  ACTIVITY_TYPE_RUNNING = 1,
  ACTIVITY_TYPE_CYCLING = 2,
  ACTIVITY_TYPE_WALKING = 3,
}
export enum ActivitySortBy { 
  ACTIVITY_SORT_BY_UNSPECIFIED = 0,
  ACTIVITY_SORT_BY_END_TIME = 1,
  ACTIVITY_SORT_BY_TOTAL_DISTANCE = 2,
  ACTIVITY_SORT_BY_ENERGY = 3,
  ACTIVITY_SORT_BY_DURATION = 4,
}
export enum CommitType { 
  COMMIT_TYPE_UNSPECIFIED = 0,
  COMMIT_TYPE_PLAN = 1,
  COMMIT_TYPE_CHALLENGE = 2,
  COMMIT_TYPE_EVENT = 3,
}
export enum AchievementLevel { 
  ACHIEVEMENT_LEVEL_UNSPECIFIED = 0,
  ACHIEVEMENT_LEVEL_BEGINNER = 1,
  ACHIEVEMENT_LEVEL_INTERMEDIATE = 2,
  ACHIEVEMENT_LEVEL_ADVANCED = 3,
  ACHIEVEMENT_LEVEL_EXPERT = 4,
}
