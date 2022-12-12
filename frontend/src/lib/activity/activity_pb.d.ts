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
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateActivityInfoReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateActivityInfoReply): CreateActivityInfoReply.AsObject;
  static serializeBinaryToWriter(message: CreateActivityInfoReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateActivityInfoReply;
  static deserializeBinaryFromReader(message: CreateActivityInfoReply, reader: jspb.BinaryReader): CreateActivityInfoReply;
}

export namespace CreateActivityInfoReply {
  export type AsObject = {
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
