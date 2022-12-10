import { ActivityClient } from "../../../lib/activity/ActivityServiceClientPb";

import {
  CreateActivityInfoRequest,
  CreateActivityInfoReply,
  ListActivityInfoRequest,
  ListActivityInfoReply,
  ActivityInfo,
  TrackPoint,
} from "../../../lib/activity/activity_pb";
import { GRPCClientResponse } from "../abstract/types";

import { GRPCClientConfig } from "../abstract/types";
import gRPCClientAbstract from "../abstract/gRPCClient";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";

class rpcActivityClient extends gRPCClientAbstract {
  constructor(config: GRPCClientConfig) {
    config.serviceName = "ACTIVITY";
    super(ActivityClient, config);
  }

  async createActivityInfo(activityInfoObj: ActivityInfo.AsObject) {
    const route: Array<TrackPoint> = [];
    activityInfoObj?.routeList.forEach((pointObject) => {
      const point = new TrackPoint();
      point
        .setAltitude(pointObject.altitude)
        .setLatitude(pointObject.latitude)
        .setLongtitude(pointObject.longtitude)
        .setCreatedAt(
          new Timestamp().setSeconds(pointObject.createdAt?.seconds || 0)
        )
        .setIsStopPoint(pointObject.isStopPoint);
      route.push(point);
    });

    const activityInfo = new ActivityInfo();
    activityInfo
      .setRouteList(route)
      .setActivityNote(activityInfoObj?.activityNote || "")
      .setActivityName(activityInfoObj?.activityName || "")
      .setDuration(activityInfoObj?.duration || 0)
      .setEndTime(
        new Timestamp().setSeconds(activityInfoObj?.endTime?.seconds || 0)
      )
      .setStartTime(
        new Timestamp().setSeconds(activityInfoObj?.startTime?.seconds || 0)
      )
      .setKcal(activityInfoObj?.kcal || 0)
      .setTotalDistance(activityInfoObj?.totalDistance || 0)
      .setType(activityInfoObj?.type || 0);

    const req = new CreateActivityInfoRequest();
    req.setActivityInfo(activityInfo);
    return await this.gRPCClientRequest<CreateActivityInfoReply.AsObject>(
      "createActivityInfo",
      req
    );
  }

  async listActivityInfo(params: ListActivityInfoRequest.AsObject) {
    const { activityType, ascending, limit, offset, sortBy, from, to } = params;
    const req = new ListActivityInfoRequest();
    req
      .setLimit(limit)
      .setOffset(offset)
      .setActivityType(activityType)
      .setAscending(ascending)
      .setLimit(limit)
      .setSortBy(sortBy)
      .setFrom(
        from ? new Timestamp().setSeconds(from?.seconds || 0) : undefined
      )
      .setTo(to ? new Timestamp().setSeconds(to?.seconds || 0) : undefined);
    return await this.gRPCClientRequest<ListActivityInfoReply.AsObject>(
      "listActivityInfo",
      req
    );
  }
}

export default rpcActivityClient;
