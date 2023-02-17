import { NotificationClient } from "../../../lib/notification/NotificationServiceClientPb";
import {
 PushNotiRequest,
 ExpoPushTokenRequest
} from "../../../lib/notification/notification_pb";

import { GRPCClientConfig } from "../abstract/types";
import gRPCClientAbstract from "../abstract/gRPCClient";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

class rpcNotificationClient extends gRPCClientAbstract {
  constructor(config: GRPCClientConfig) {
    config.serviceName = "NOTIFICATION";
    super(NotificationClient, config);
  }

//   async signUp(param: SignUpRequest.AsObject) {
//     const req = new SignUpRequest();
//     req.setUserName(param.userName);
//     req.setPassword(param.password);
//     req.setDisplayName(param.displayName);

//     return await this.gRPCClientRequest<SignUpReply.AsObject>("signUp", req);
//   }

//   async pushNotification(param: PushNotiRequest.AsObject) {
//     const req = new PushNotiRequest()
//     req.
//     return await this.gRPCClientRequest<Empty.AsObject>("pushNotification", req);
//   }

  async checkIfExistOrSaveExpoPushToken(param: ExpoPushTokenRequest.AsObject) {
    const req = new ExpoPushTokenRequest()
    req.setExpoPushToken(param.expoPushToken)
    req.setUserId(param.userId)
    return await this.gRPCClientRequest<Empty.AsObject>("checkIfExistOrSaveExpoPushToken", req);
  }

  async removeExpoPushToken(param: ExpoPushTokenRequest.AsObject) {
    const req = new ExpoPushTokenRequest()
    req.setExpoPushToken(param.expoPushToken)
    req.setUserId(param.userId)
    return await this.gRPCClientRequest<Empty.AsObject>("removeExpoPushToken", req);
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

export default rpcNotificationClient;