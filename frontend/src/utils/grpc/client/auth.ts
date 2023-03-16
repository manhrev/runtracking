import { AuthClient } from "../../../lib/auth/AuthServiceClientPb";
import {
  LoginRequest,
  LoginReply,
  SignUpRequest,
  SignUpReply,
  MeReply,
  HealthRecordRequest,
  UpdateUserInfoRequest,
  UpdateUserInfoReply,
  UserInfo,
} from "../../../lib/auth/auth_pb";

import { GRPCClientConfig } from "../abstract/types";
import gRPCClientAbstract from "../abstract/gRPCClient";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

class rpcAuthClient extends gRPCClientAbstract {
  constructor(config: GRPCClientConfig) {
    config.serviceName = "AUTH";
    super(AuthClient, config);
  }

  async signUp(param: SignUpRequest.AsObject) {
    const req = new SignUpRequest();
    req.setUserName(param.userName);
    req.setPassword(param.password);
    req.setDisplayName(param.displayName);

    return await this.gRPCClientRequest<SignUpReply.AsObject>("signUp", req);
  }

  async logIn(param: LoginRequest.AsObject) {
    const req = new LoginRequest();
    req.setUserName(param.userName);
    req.setPassword(param.password);
    return await this.gRPCClientRequest<LoginReply.AsObject>("login", req);
  }

  async logOut() {
    const req = new Empty();
    return await this.gRPCClientRequest<Empty.AsObject>("logOut", req);
  }

  async getMe() {
    const req = new Empty();
    return await this.gRPCClientRequest<MeReply.AsObject>("me", req);
  }

  async updateHealthInfo(param: HealthRecordRequest.AsObject) {
    const req = new HealthRecordRequest();
    req.setAge(param.age);
    req.setHeight(param.height);
    req.setWeight(param.weight);
    return await this.gRPCClientRequest<Empty.AsObject>("setHealthRecord", req);
  }

  async updateUserInfo(param: UpdateUserInfoRequest) {
    return await this.gRPCClientRequest<UpdateUserInfoReply.AsObject>(
      "updateUserInfo",
      param
    );
  }
}

export default rpcAuthClient;
