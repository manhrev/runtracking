import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class InviteGroupsToEventRequest extends jspb.Message {
  getEventId(): number;
  setEventId(value: number): InviteGroupsToEventRequest;

  getGroupIdsList(): Array<number>;
  setGroupIdsList(value: Array<number>): InviteGroupsToEventRequest;
  clearGroupIdsList(): InviteGroupsToEventRequest;
  addGroupIds(value: number, index?: number): InviteGroupsToEventRequest;

  getOwnerGroupId(): number;
  setOwnerGroupId(value: number): InviteGroupsToEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteGroupsToEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InviteGroupsToEventRequest): InviteGroupsToEventRequest.AsObject;
  static serializeBinaryToWriter(message: InviteGroupsToEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteGroupsToEventRequest;
  static deserializeBinaryFromReader(message: InviteGroupsToEventRequest, reader: jspb.BinaryReader): InviteGroupsToEventRequest;
}

export namespace InviteGroupsToEventRequest {
  export type AsObject = {
    eventId: number,
    groupIdsList: Array<number>,
    ownerGroupId: number,
  }
}

export class InviteGroupsToEventReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteGroupsToEventReply.AsObject;
  static toObject(includeInstance: boolean, msg: InviteGroupsToEventReply): InviteGroupsToEventReply.AsObject;
  static serializeBinaryToWriter(message: InviteGroupsToEventReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteGroupsToEventReply;
  static deserializeBinaryFromReader(message: InviteGroupsToEventReply, reader: jspb.BinaryReader): InviteGroupsToEventReply;
}

export namespace InviteGroupsToEventReply {
  export type AsObject = {
  }
}

export class SubEvent extends jspb.Message {
  getId(): number;
  setId(value: number): SubEvent;

  getName(): string;
  setName(value: string): SubEvent;

  getDescription(): string;
  setDescription(value: string): SubEvent;

  getPicture(): string;
  setPicture(value: string): SubEvent;

  getGoal(): number;
  setGoal(value: number): SubEvent;

  getRule(): Rule;
  setRule(value: Rule): SubEvent;

  getStartAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartAt(value?: google_protobuf_timestamp_pb.Timestamp): SubEvent;
  hasStartAt(): boolean;
  clearStartAt(): SubEvent;

  getEndAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndAt(value?: google_protobuf_timestamp_pb.Timestamp): SubEvent;
  hasEndAt(): boolean;
  clearEndAt(): SubEvent;

  getStatus(): SubEventStatus;
  setStatus(value: SubEventStatus): SubEvent;

  getActivityType(): ActivityType;
  setActivityType(value: ActivityType): SubEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubEvent.AsObject;
  static toObject(includeInstance: boolean, msg: SubEvent): SubEvent.AsObject;
  static serializeBinaryToWriter(message: SubEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubEvent;
  static deserializeBinaryFromReader(message: SubEvent, reader: jspb.BinaryReader): SubEvent;
}

export namespace SubEvent {
  export type AsObject = {
    id: number,
    name: string,
    description: string,
    picture: string,
    goal: number,
    rule: Rule,
    startAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: SubEventStatus,
    activityType: ActivityType,
  }
}

export class EventDetail extends jspb.Message {
  getId(): number;
  setId(value: number): EventDetail;

  getName(): string;
  setName(value: string): EventDetail;

  getDescription(): string;
  setDescription(value: string): EventDetail;

  getPicture(): string;
  setPicture(value: string): EventDetail;

  getIsGlobal(): boolean;
  setIsGlobal(value: boolean): EventDetail;

  getStartAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartAt(value?: google_protobuf_timestamp_pb.Timestamp): EventDetail;
  hasStartAt(): boolean;
  clearStartAt(): EventDetail;

  getEndAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndAt(value?: google_protobuf_timestamp_pb.Timestamp): EventDetail;
  hasEndAt(): boolean;
  clearEndAt(): EventDetail;

  getOwnerGroupId(): number;
  setOwnerGroupId(value: number): EventDetail;

  getNumOfGroups(): number;
  setNumOfGroups(value: number): EventDetail;

  getYourGroupStatus(): GroupStatus;
  setYourGroupStatus(value: GroupStatus): EventDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventDetail.AsObject;
  static toObject(includeInstance: boolean, msg: EventDetail): EventDetail.AsObject;
  static serializeBinaryToWriter(message: EventDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventDetail;
  static deserializeBinaryFromReader(message: EventDetail, reader: jspb.BinaryReader): EventDetail;
}

export namespace EventDetail {
  export type AsObject = {
    id: number,
    name: string,
    description: string,
    picture: string,
    isGlobal: boolean,
    startAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ownerGroupId: number,
    numOfGroups: number,
    yourGroupStatus: GroupStatus,
  }
}

export class CreateEventRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateEventRequest;

  getDescription(): string;
  setDescription(value: string): CreateEventRequest;

  getPicture(): string;
  setPicture(value: string): CreateEventRequest;

  getIsGlobal(): boolean;
  setIsGlobal(value: boolean): CreateEventRequest;

  getSubEventsList(): Array<CreateSubEvent>;
  setSubEventsList(value: Array<CreateSubEvent>): CreateEventRequest;
  clearSubEventsList(): CreateEventRequest;
  addSubEvents(value?: CreateSubEvent, index?: number): CreateSubEvent;

  getOwnerGroupId(): number;
  setOwnerGroupId(value: number): CreateEventRequest;

  getStartAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartAt(value?: google_protobuf_timestamp_pb.Timestamp): CreateEventRequest;
  hasStartAt(): boolean;
  clearStartAt(): CreateEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventRequest): CreateEventRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventRequest;
  static deserializeBinaryFromReader(message: CreateEventRequest, reader: jspb.BinaryReader): CreateEventRequest;
}

export namespace CreateEventRequest {
  export type AsObject = {
    name: string,
    description: string,
    picture: string,
    isGlobal: boolean,
    subEventsList: Array<CreateSubEvent.AsObject>,
    ownerGroupId: number,
    startAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateSubEvent extends jspb.Message {
  getName(): string;
  setName(value: string): CreateSubEvent;

  getDescription(): string;
  setDescription(value: string): CreateSubEvent;

  getPicture(): string;
  setPicture(value: string): CreateSubEvent;

  getGoal(): number;
  setGoal(value: number): CreateSubEvent;

  getRule(): Rule;
  setRule(value: Rule): CreateSubEvent;

  getStartAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartAt(value?: google_protobuf_timestamp_pb.Timestamp): CreateSubEvent;
  hasStartAt(): boolean;
  clearStartAt(): CreateSubEvent;

  getEndAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndAt(value?: google_protobuf_timestamp_pb.Timestamp): CreateSubEvent;
  hasEndAt(): boolean;
  clearEndAt(): CreateSubEvent;

  getActivityType(): ActivityType;
  setActivityType(value: ActivityType): CreateSubEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSubEvent.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSubEvent): CreateSubEvent.AsObject;
  static serializeBinaryToWriter(message: CreateSubEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSubEvent;
  static deserializeBinaryFromReader(message: CreateSubEvent, reader: jspb.BinaryReader): CreateSubEvent;
}

export namespace CreateSubEvent {
  export type AsObject = {
    name: string,
    description: string,
    picture: string,
    goal: number,
    rule: Rule,
    startAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    activityType: ActivityType,
  }
}

export class CreateEventReply extends jspb.Message {
  getIdCreated(): number;
  setIdCreated(value: number): CreateEventReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventReply): CreateEventReply.AsObject;
  static serializeBinaryToWriter(message: CreateEventReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventReply;
  static deserializeBinaryFromReader(message: CreateEventReply, reader: jspb.BinaryReader): CreateEventReply;
}

export namespace CreateEventReply {
  export type AsObject = {
    idCreated: number,
  }
}

export class UpdateEventInfoRequest extends jspb.Message {
  getEventId(): number;
  setEventId(value: number): UpdateEventInfoRequest;

  getName(): string;
  setName(value: string): UpdateEventInfoRequest;

  getDescription(): string;
  setDescription(value: string): UpdateEventInfoRequest;

  getPicture(): string;
  setPicture(value: string): UpdateEventInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventInfoRequest): UpdateEventInfoRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEventInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventInfoRequest;
  static deserializeBinaryFromReader(message: UpdateEventInfoRequest, reader: jspb.BinaryReader): UpdateEventInfoRequest;
}

export namespace UpdateEventInfoRequest {
  export type AsObject = {
    eventId: number,
    name: string,
    description: string,
    picture: string,
  }
}

export class UpdateEventInfoReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventInfoReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventInfoReply): UpdateEventInfoReply.AsObject;
  static serializeBinaryToWriter(message: UpdateEventInfoReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventInfoReply;
  static deserializeBinaryFromReader(message: UpdateEventInfoReply, reader: jspb.BinaryReader): UpdateEventInfoReply;
}

export namespace UpdateEventInfoReply {
  export type AsObject = {
  }
}

export class JoinEventRequest extends jspb.Message {
  getEventId(): number;
  setEventId(value: number): JoinEventRequest;

  getGroupId(): number;
  setGroupId(value: number): JoinEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinEventRequest): JoinEventRequest.AsObject;
  static serializeBinaryToWriter(message: JoinEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinEventRequest;
  static deserializeBinaryFromReader(message: JoinEventRequest, reader: jspb.BinaryReader): JoinEventRequest;
}

export namespace JoinEventRequest {
  export type AsObject = {
    eventId: number,
    groupId: number,
  }
}

export class JoinEventReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinEventReply.AsObject;
  static toObject(includeInstance: boolean, msg: JoinEventReply): JoinEventReply.AsObject;
  static serializeBinaryToWriter(message: JoinEventReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinEventReply;
  static deserializeBinaryFromReader(message: JoinEventReply, reader: jspb.BinaryReader): JoinEventReply;
}

export namespace JoinEventReply {
  export type AsObject = {
  }
}

export class ListGroupsInEventRequest extends jspb.Message {
  getEventId(): number;
  setEventId(value: number): ListGroupsInEventRequest;

  getLimit(): number;
  setLimit(value: number): ListGroupsInEventRequest;

  getOffset(): number;
  setOffset(value: number): ListGroupsInEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGroupsInEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListGroupsInEventRequest): ListGroupsInEventRequest.AsObject;
  static serializeBinaryToWriter(message: ListGroupsInEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGroupsInEventRequest;
  static deserializeBinaryFromReader(message: ListGroupsInEventRequest, reader: jspb.BinaryReader): ListGroupsInEventRequest;
}

export namespace ListGroupsInEventRequest {
  export type AsObject = {
    eventId: number,
    limit: number,
    offset: number,
  }
}

export class GroupInEvent extends jspb.Message {
  getId(): number;
  setId(value: number): GroupInEvent;

  getStatus(): GroupStatus;
  setStatus(value: GroupStatus): GroupInEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupInEvent.AsObject;
  static toObject(includeInstance: boolean, msg: GroupInEvent): GroupInEvent.AsObject;
  static serializeBinaryToWriter(message: GroupInEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupInEvent;
  static deserializeBinaryFromReader(message: GroupInEvent, reader: jspb.BinaryReader): GroupInEvent;
}

export namespace GroupInEvent {
  export type AsObject = {
    id: number,
    status: GroupStatus,
  }
}

export class ListGroupsInEventReply extends jspb.Message {
  getGroupsList(): Array<GroupInEvent>;
  setGroupsList(value: Array<GroupInEvent>): ListGroupsInEventReply;
  clearGroupsList(): ListGroupsInEventReply;
  addGroups(value?: GroupInEvent, index?: number): GroupInEvent;

  getTotal(): number;
  setTotal(value: number): ListGroupsInEventReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGroupsInEventReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListGroupsInEventReply): ListGroupsInEventReply.AsObject;
  static serializeBinaryToWriter(message: ListGroupsInEventReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGroupsInEventReply;
  static deserializeBinaryFromReader(message: ListGroupsInEventReply, reader: jspb.BinaryReader): ListGroupsInEventReply;
}

export namespace ListGroupsInEventReply {
  export type AsObject = {
    groupsList: Array<GroupInEvent.AsObject>,
    total: number,
  }
}

export class ApproveJoinEventRequest extends jspb.Message {
  getEventId(): number;
  setEventId(value: number): ApproveJoinEventRequest;

  getGroupId(): number;
  setGroupId(value: number): ApproveJoinEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApproveJoinEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApproveJoinEventRequest): ApproveJoinEventRequest.AsObject;
  static serializeBinaryToWriter(message: ApproveJoinEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApproveJoinEventRequest;
  static deserializeBinaryFromReader(message: ApproveJoinEventRequest, reader: jspb.BinaryReader): ApproveJoinEventRequest;
}

export namespace ApproveJoinEventRequest {
  export type AsObject = {
    eventId: number,
    groupId: number,
  }
}

export class ApproveJoinEventReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApproveJoinEventReply.AsObject;
  static toObject(includeInstance: boolean, msg: ApproveJoinEventReply): ApproveJoinEventReply.AsObject;
  static serializeBinaryToWriter(message: ApproveJoinEventReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApproveJoinEventReply;
  static deserializeBinaryFromReader(message: ApproveJoinEventReply, reader: jspb.BinaryReader): ApproveJoinEventReply;
}

export namespace ApproveJoinEventReply {
  export type AsObject = {
  }
}

export class AddSubEventToEventRequest extends jspb.Message {
  getEventId(): number;
  setEventId(value: number): AddSubEventToEventRequest;

  getSubEvent(): CreateSubEvent | undefined;
  setSubEvent(value?: CreateSubEvent): AddSubEventToEventRequest;
  hasSubEvent(): boolean;
  clearSubEvent(): AddSubEventToEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSubEventToEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddSubEventToEventRequest): AddSubEventToEventRequest.AsObject;
  static serializeBinaryToWriter(message: AddSubEventToEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSubEventToEventRequest;
  static deserializeBinaryFromReader(message: AddSubEventToEventRequest, reader: jspb.BinaryReader): AddSubEventToEventRequest;
}

export namespace AddSubEventToEventRequest {
  export type AsObject = {
    eventId: number,
    subEvent?: CreateSubEvent.AsObject,
  }
}

export class AddSubEventToEventReply extends jspb.Message {
  getIdCreated(): number;
  setIdCreated(value: number): AddSubEventToEventReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSubEventToEventReply.AsObject;
  static toObject(includeInstance: boolean, msg: AddSubEventToEventReply): AddSubEventToEventReply.AsObject;
  static serializeBinaryToWriter(message: AddSubEventToEventReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSubEventToEventReply;
  static deserializeBinaryFromReader(message: AddSubEventToEventReply, reader: jspb.BinaryReader): AddSubEventToEventReply;
}

export namespace AddSubEventToEventReply {
  export type AsObject = {
    idCreated: number,
  }
}

export class RemoveSubEventFromEventRequest extends jspb.Message {
  getEventId(): number;
  setEventId(value: number): RemoveSubEventFromEventRequest;

  getSubEventId(): number;
  setSubEventId(value: number): RemoveSubEventFromEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveSubEventFromEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveSubEventFromEventRequest): RemoveSubEventFromEventRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveSubEventFromEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveSubEventFromEventRequest;
  static deserializeBinaryFromReader(message: RemoveSubEventFromEventRequest, reader: jspb.BinaryReader): RemoveSubEventFromEventRequest;
}

export namespace RemoveSubEventFromEventRequest {
  export type AsObject = {
    eventId: number,
    subEventId: number,
  }
}

export class RemoveSubEventFromEventReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveSubEventFromEventReply.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveSubEventFromEventReply): RemoveSubEventFromEventReply.AsObject;
  static serializeBinaryToWriter(message: RemoveSubEventFromEventReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveSubEventFromEventReply;
  static deserializeBinaryFromReader(message: RemoveSubEventFromEventReply, reader: jspb.BinaryReader): RemoveSubEventFromEventReply;
}

export namespace RemoveSubEventFromEventReply {
  export type AsObject = {
  }
}

export class ListEventsRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): ListEventsRequest;

  getOffset(): number;
  setOffset(value: number): ListEventsRequest;

  getAscending(): boolean;
  setAscending(value: boolean): ListEventsRequest;

  getSortBy(): ListEventsRequest.SortBy;
  setSortBy(value: ListEventsRequest.SortBy): ListEventsRequest;

  getIdsList(): Array<number>;
  setIdsList(value: Array<number>): ListEventsRequest;
  clearIdsList(): ListEventsRequest;
  addIds(value: number, index?: number): ListEventsRequest;

  getGroupIdsList(): Array<number>;
  setGroupIdsList(value: Array<number>): ListEventsRequest;
  clearGroupIdsList(): ListEventsRequest;
  addGroupIds(value: number, index?: number): ListEventsRequest;

  getVisibility(): ListEventsRequest.Visibility;
  setVisibility(value: ListEventsRequest.Visibility): ListEventsRequest;

  getSearch(): string;
  setSearch(value: string): ListEventsRequest;

  getYourGroupId(): number;
  setYourGroupId(value: number): ListEventsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventsRequest): ListEventsRequest.AsObject;
  static serializeBinaryToWriter(message: ListEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventsRequest;
  static deserializeBinaryFromReader(message: ListEventsRequest, reader: jspb.BinaryReader): ListEventsRequest;
}

export namespace ListEventsRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    ascending: boolean,
    sortBy: ListEventsRequest.SortBy,
    idsList: Array<number>,
    groupIdsList: Array<number>,
    visibility: ListEventsRequest.Visibility,
    search: string,
    yourGroupId: number,
  }

  export enum SortBy { 
    SORT_BY_UNSPECIFIED = 0,
    SORT_BY_NAME = 1,
    SORT_BY_START_AT = 2,
    SORT_BY_NUM_OF_GROUPS = 3,
  }

  export enum Visibility { 
    VISIBILITY_UNSPECIFIED = 0,
    VISIBILITY_GLOBAL = 1,
    VISIBILITY_NO_GLOBAL = 2,
  }
}

export class ListEventsReply extends jspb.Message {
  getEventsList(): Array<EventDetail>;
  setEventsList(value: Array<EventDetail>): ListEventsReply;
  clearEventsList(): ListEventsReply;
  addEvents(value?: EventDetail, index?: number): EventDetail;

  getTotal(): number;
  setTotal(value: number): ListEventsReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventsReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventsReply): ListEventsReply.AsObject;
  static serializeBinaryToWriter(message: ListEventsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventsReply;
  static deserializeBinaryFromReader(message: ListEventsReply, reader: jspb.BinaryReader): ListEventsReply;
}

export namespace ListEventsReply {
  export type AsObject = {
    eventsList: Array<EventDetail.AsObject>,
    total: number,
  }
}

export class ListSubEventsRequest extends jspb.Message {
  getEventId(): number;
  setEventId(value: number): ListSubEventsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSubEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSubEventsRequest): ListSubEventsRequest.AsObject;
  static serializeBinaryToWriter(message: ListSubEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSubEventsRequest;
  static deserializeBinaryFromReader(message: ListSubEventsRequest, reader: jspb.BinaryReader): ListSubEventsRequest;
}

export namespace ListSubEventsRequest {
  export type AsObject = {
    eventId: number,
  }
}

export class ListSubEventsReply extends jspb.Message {
  getSubEventsList(): Array<SubEvent>;
  setSubEventsList(value: Array<SubEvent>): ListSubEventsReply;
  clearSubEventsList(): ListSubEventsReply;
  addSubEvents(value?: SubEvent, index?: number): SubEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSubEventsReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListSubEventsReply): ListSubEventsReply.AsObject;
  static serializeBinaryToWriter(message: ListSubEventsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSubEventsReply;
  static deserializeBinaryFromReader(message: ListSubEventsReply, reader: jspb.BinaryReader): ListSubEventsReply;
}

export namespace ListSubEventsReply {
  export type AsObject = {
    subEventsList: Array<SubEvent.AsObject>,
  }
}

export class ListGroupProgressInEventRequest extends jspb.Message {
  getEventId(): number;
  setEventId(value: number): ListGroupProgressInEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGroupProgressInEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListGroupProgressInEventRequest): ListGroupProgressInEventRequest.AsObject;
  static serializeBinaryToWriter(message: ListGroupProgressInEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGroupProgressInEventRequest;
  static deserializeBinaryFromReader(message: ListGroupProgressInEventRequest, reader: jspb.BinaryReader): ListGroupProgressInEventRequest;
}

export namespace ListGroupProgressInEventRequest {
  export type AsObject = {
    eventId: number,
  }
}

export class SubEventProgress extends jspb.Message {
  getSubEventId(): number;
  setSubEventId(value: number): SubEventProgress;

  getGroupProgressList(): Array<GroupProgressInSubEvent>;
  setGroupProgressList(value: Array<GroupProgressInSubEvent>): SubEventProgress;
  clearGroupProgressList(): SubEventProgress;
  addGroupProgress(value?: GroupProgressInSubEvent, index?: number): GroupProgressInSubEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubEventProgress.AsObject;
  static toObject(includeInstance: boolean, msg: SubEventProgress): SubEventProgress.AsObject;
  static serializeBinaryToWriter(message: SubEventProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubEventProgress;
  static deserializeBinaryFromReader(message: SubEventProgress, reader: jspb.BinaryReader): SubEventProgress;
}

export namespace SubEventProgress {
  export type AsObject = {
    subEventId: number,
    groupProgressList: Array<GroupProgressInSubEvent.AsObject>,
  }
}

export class GroupProgressInSubEvent extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): GroupProgressInSubEvent;

  getProgress(): number;
  setProgress(value: number): GroupProgressInSubEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupProgressInSubEvent.AsObject;
  static toObject(includeInstance: boolean, msg: GroupProgressInSubEvent): GroupProgressInSubEvent.AsObject;
  static serializeBinaryToWriter(message: GroupProgressInSubEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupProgressInSubEvent;
  static deserializeBinaryFromReader(message: GroupProgressInSubEvent, reader: jspb.BinaryReader): GroupProgressInSubEvent;
}

export namespace GroupProgressInSubEvent {
  export type AsObject = {
    groupId: number,
    progress: number,
  }
}

export class ListGroupProgressInEventReply extends jspb.Message {
  getSubEventProgressList(): Array<SubEventProgress>;
  setSubEventProgressList(value: Array<SubEventProgress>): ListGroupProgressInEventReply;
  clearSubEventProgressList(): ListGroupProgressInEventReply;
  addSubEventProgress(value?: SubEventProgress, index?: number): SubEventProgress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGroupProgressInEventReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListGroupProgressInEventReply): ListGroupProgressInEventReply.AsObject;
  static serializeBinaryToWriter(message: ListGroupProgressInEventReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGroupProgressInEventReply;
  static deserializeBinaryFromReader(message: ListGroupProgressInEventReply, reader: jspb.BinaryReader): ListGroupProgressInEventReply;
}

export namespace ListGroupProgressInEventReply {
  export type AsObject = {
    subEventProgressList: Array<SubEventProgress.AsObject>,
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
  RULE_TOTAL_TIME = 2,
  RULE_TOTAL_ACTIVITY = 3,
  RULE_TOTAL_CALORIES = 4,
}
export enum RuleStatus { 
  RULE_STATUS_UNSPECIFIED = 0,
  RULE_STATUS_FAILED = 1,
  RULE_STATUS_COMPLETED = 2,
  RULE_STATUS_INPROGRESS = 3,
}
export enum SubEventStatus { 
  SUB_EVENT_STATUS_UNSPECIFIED = 0,
  SUB_EVENT_STATUS_NEW = 1,
  SUB_EVENT_STATUS_IN_PROGRESS = 2,
  SUB_EVENT_STATUS_ENDED = 3,
}
export enum GroupStatus { 
  GROUP_STATUS_UNSPECIFIED = 0,
  GROUP_STATUS_REQUESTED = 1,
  GROUP_STATUS_ACTIVE = 2,
  GROUP_STATUS_BANNED = 5,
  GROUP_STATUS_REJECTED = 3,
  GROUP_STATUS_LEFT = 4,
}
