import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class CreatePlanRequest extends jspb.Message {
  getRule(): Rule;
  setRule(value: Rule): CreatePlanRequest;

  getActivityType(): ActivityType;
  setActivityType(value: ActivityType): CreatePlanRequest;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): CreatePlanRequest;
  hasStartTime(): boolean;
  clearStartTime(): CreatePlanRequest;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): CreatePlanRequest;
  hasEndTime(): boolean;
  clearEndTime(): CreatePlanRequest;

  getGoal(): number;
  setGoal(value: number): CreatePlanRequest;

  getName(): string;
  setName(value: string): CreatePlanRequest;

  getNote(): string;
  setNote(value: string): CreatePlanRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePlanRequest): CreatePlanRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePlanRequest;
  static deserializeBinaryFromReader(message: CreatePlanRequest, reader: jspb.BinaryReader): CreatePlanRequest;
}

export namespace CreatePlanRequest {
  export type AsObject = {
    rule: Rule,
    activityType: ActivityType,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    goal: number,
    name: string,
    note: string,
  }
}

export class CreatePlanReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePlanReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePlanReply): CreatePlanReply.AsObject;
  static serializeBinaryToWriter(message: CreatePlanReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePlanReply;
  static deserializeBinaryFromReader(message: CreatePlanReply, reader: jspb.BinaryReader): CreatePlanReply;
}

export namespace CreatePlanReply {
  export type AsObject = {
  }
}

export class PlanProgress extends jspb.Message {
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): PlanProgress;
  hasTimestamp(): boolean;
  clearTimestamp(): PlanProgress;

  getValue(): number;
  setValue(value: number): PlanProgress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlanProgress.AsObject;
  static toObject(includeInstance: boolean, msg: PlanProgress): PlanProgress.AsObject;
  static serializeBinaryToWriter(message: PlanProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlanProgress;
  static deserializeBinaryFromReader(message: PlanProgress, reader: jspb.BinaryReader): PlanProgress;
}

export namespace PlanProgress {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    value: number,
  }
}

export class PlanInfo extends jspb.Message {
  getId(): number;
  setId(value: number): PlanInfo;

  getActivityType(): ActivityType;
  setActivityType(value: ActivityType): PlanInfo;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): PlanInfo;
  hasStartTime(): boolean;
  clearStartTime(): PlanInfo;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): PlanInfo;
  hasEndTime(): boolean;
  clearEndTime(): PlanInfo;

  getGoal(): number;
  setGoal(value: number): PlanInfo;

  getTotal(): number;
  setTotal(value: number): PlanInfo;

  getName(): string;
  setName(value: string): PlanInfo;

  getNote(): string;
  setNote(value: string): PlanInfo;

  getRule(): Rule;
  setRule(value: Rule): PlanInfo;

  getProgressList(): Array<PlanProgress>;
  setProgressList(value: Array<PlanProgress>): PlanInfo;
  clearProgressList(): PlanInfo;
  addProgress(value?: PlanProgress, index?: number): PlanProgress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlanInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PlanInfo): PlanInfo.AsObject;
  static serializeBinaryToWriter(message: PlanInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlanInfo;
  static deserializeBinaryFromReader(message: PlanInfo, reader: jspb.BinaryReader): PlanInfo;
}

export namespace PlanInfo {
  export type AsObject = {
    id: number,
    activityType: ActivityType,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    goal: number,
    total: number,
    name: string,
    note: string,
    rule: Rule,
    progressList: Array<PlanProgress.AsObject>,
  }
}

export class ListPlanRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): ListPlanRequest;

  getOffset(): number;
  setOffset(value: number): ListPlanRequest;

  getAscending(): boolean;
  setAscending(value: boolean): ListPlanRequest;

  getSortBy(): PlanSortBy;
  setSortBy(value: PlanSortBy): ListPlanRequest;

  getActivityType(): ActivityType;
  setActivityType(value: ActivityType): ListPlanRequest;

  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): ListPlanRequest;
  hasFrom(): boolean;
  clearFrom(): ListPlanRequest;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): ListPlanRequest;
  hasTo(): boolean;
  clearTo(): ListPlanRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPlanRequest): ListPlanRequest.AsObject;
  static serializeBinaryToWriter(message: ListPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPlanRequest;
  static deserializeBinaryFromReader(message: ListPlanRequest, reader: jspb.BinaryReader): ListPlanRequest;
}

export namespace ListPlanRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    ascending: boolean,
    sortBy: PlanSortBy,
    activityType: ActivityType,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListPlanReply extends jspb.Message {
  getPlansList(): Array<PlanInfo>;
  setPlansList(value: Array<PlanInfo>): ListPlanReply;
  clearPlansList(): ListPlanReply;
  addPlans(value?: PlanInfo, index?: number): PlanInfo;

  getTotal(): number;
  setTotal(value: number): ListPlanReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPlanReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListPlanReply): ListPlanReply.AsObject;
  static serializeBinaryToWriter(message: ListPlanReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPlanReply;
  static deserializeBinaryFromReader(message: ListPlanReply, reader: jspb.BinaryReader): ListPlanReply;
}

export namespace ListPlanReply {
  export type AsObject = {
    plansList: Array<PlanInfo.AsObject>,
    total: number,
  }
}

export class DeletePlansRequest extends jspb.Message {
  getIdsList(): Array<number>;
  setIdsList(value: Array<number>): DeletePlansRequest;
  clearIdsList(): DeletePlansRequest;
  addIds(value: number, index?: number): DeletePlansRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePlansRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePlansRequest): DeletePlansRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePlansRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePlansRequest;
  static deserializeBinaryFromReader(message: DeletePlansRequest, reader: jspb.BinaryReader): DeletePlansRequest;
}

export namespace DeletePlansRequest {
  export type AsObject = {
    idsList: Array<number>,
  }
}

export class DeletePlansReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePlansReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePlansReply): DeletePlansReply.AsObject;
  static serializeBinaryToWriter(message: DeletePlansReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePlansReply;
  static deserializeBinaryFromReader(message: DeletePlansReply, reader: jspb.BinaryReader): DeletePlansReply;
}

export namespace DeletePlansReply {
  export type AsObject = {
  }
}

export class UpdatePlanRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdatePlanRequest;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): UpdatePlanRequest;
  hasEndTime(): boolean;
  clearEndTime(): UpdatePlanRequest;

  getGoal(): number;
  setGoal(value: number): UpdatePlanRequest;

  getName(): string;
  setName(value: string): UpdatePlanRequest;

  getNote(): string;
  setNote(value: string): UpdatePlanRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePlanRequest): UpdatePlanRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePlanRequest;
  static deserializeBinaryFromReader(message: UpdatePlanRequest, reader: jspb.BinaryReader): UpdatePlanRequest;
}

export namespace UpdatePlanRequest {
  export type AsObject = {
    id: number,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    goal: number,
    name: string,
    note: string,
  }
}

export class UpdatePlanReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePlanReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePlanReply): UpdatePlanReply.AsObject;
  static serializeBinaryToWriter(message: UpdatePlanReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePlanReply;
  static deserializeBinaryFromReader(message: UpdatePlanReply, reader: jspb.BinaryReader): UpdatePlanReply;
}

export namespace UpdatePlanReply {
  export type AsObject = {
  }
}

export enum ActivityType { 
  ACTIVITY_TYPE_UNSPECIFIED = 0,
  ACTIVITY_TYPE_RUNNING = 1,
  ACTIVITY_TYPE_CYCLING = 2,
  ACTIVITY_TYPE_WALKING = 3,
}
export enum Rule { 
  RULE_UNSPECIFIED = 0,
  RULE_TOTAL_DISTANCE = 1,
  RULE_TOTAL_DISTANCE_DAILY = 2,
  RULE_TOTAL_TIME = 3,
  RULE_TOTAL_TIME_DAILY = 4,
  RULE_TOTAL_ACTIVITY = 5,
  RULE_TOTAL_ACTIVITY_DAILY = 6,
  RULE_TOTAL_CALORIES = 7,
  RULE_TOTAL_CALORIES_DAILY = 8,
}
export enum RuleStatus { 
  RULE_STATUS_UNSPECIFIED = 0,
  RULE_STATUS_FAILED = 1,
  RULE_STATUS_COMPLETED = 2,
  RULE_STATUS_INPROGRESS = 3,
}
export enum PlanSortBy { 
  PLAN_SORT_BY_UNSPECIFIED = 0,
  PLAN_SORT_BY_CREATED_TIME = 1,
  PLAN_SORT_BY_PROGESS = 2,
}
