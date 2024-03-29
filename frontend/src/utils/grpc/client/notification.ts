import { NotificationClient } from '../../../lib/notification/NotificationServiceClientPb'
import {
  PushNotiRequest,
  ExpoPushTokenRequest,
  ListNotificationInfoRequest,
  ListNotificationInfoReply,
  IdRequest,
  IdReply,
  UpdateNotificationInfoRequest,
  UpdateNotificationInfoReply,
} from '../../../lib/notification/notification_pb'

import { GRPCClientConfig } from '../abstract/types'
import gRPCClientAbstract from '../abstract/gRPCClient'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { ListActivityInfoReply } from '../../../lib/activity/activity_pb'

class rpcNotificationClient extends gRPCClientAbstract {
  constructor(config: GRPCClientConfig) {
    config.serviceName = 'NOTIFICATION'
    super(NotificationClient, config)
  }

  async checkIfExistOrSaveExpoPushToken(param: ExpoPushTokenRequest.AsObject) {
    const req = new ExpoPushTokenRequest()
    req.setExpoPushToken(param.expoPushToken)
    return await this.gRPCClientRequest<Empty.AsObject>(
      'checkIfExistOrSaveExpoPushToken',
      req
    )
  }

  async removeExpoPushToken(param: ExpoPushTokenRequest.AsObject) {
    const req = new ExpoPushTokenRequest()
    req.setExpoPushToken(param.expoPushToken)
    return await this.gRPCClientRequest<Empty.AsObject>(
      'removeExpoPushToken',
      req
    )
  }

  async listNotificationInfo(param: ListNotificationInfoRequest.AsObject) {
    const { limit, offset } = param
    const req = new ListNotificationInfoRequest()
    req.setLimit(limit).setOffset(offset)

    return await this.gRPCClientRequest<ListNotificationInfoReply.AsObject>(
      'listNotificationInfo',
      req
    )
  }

  async deleteNotificationInfo(param: IdRequest.AsObject) {
    const { id } = param
    const req = new IdRequest()
    req.setId(id)

    return await this.gRPCClientRequest<IdReply.AsObject>(
      'deleteNotificationInfo',
      req
    )
  }

  async updateNotificationInfo(param: UpdateNotificationInfoRequest.AsObject) {
    const { id, isSeen } = param
    const req = new UpdateNotificationInfoRequest()
    req.setId(id).setIsSeen(isSeen)

    return await this.gRPCClientRequest<UpdateNotificationInfoReply.AsObject>(
      'updateNotificationInfo',
      req
    )
  }

  //   async logOut() {
  //     const req = new Empty();
  //     return await this.gRPCClientRequest<Empty.AsObject>("logOut", req);
  //   }

  //   async getMe() {
  //     const req = new Empty();
  //     return await this.gRPCClientRequest<MeReply.AsObject>("me", req);
  //   }

  //   async updateHealthInfo(param: HealthRecordRequest.AsObject) {
  //     const req = new HealthRecordRequest();
  //     req.setAge(param.age);
  //     req.setHeight(param.height);
  //     req.setWeight(param.weight);
  //     return await this.gRPCClientRequest<Empty.AsObject>("setHealthRecord", req);
  //   }
}

export default rpcNotificationClient
