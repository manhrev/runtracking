import { AuthClient } from "../../../lib/auth/AuthServiceClientPb";
import {
  LoginRequest,
  LoginReply,
  SignUpRequest,
  SignUpReply,
} from "../../../lib/auth/auth_pb";

import { GRPCClientConfig } from "../abstract/types";
import gRPCClientAbstract from "../abstract/gRPCClient";

class rpcAuthClient extends gRPCClientAbstract {
  constructor(config: GRPCClientConfig) {
    config.serviceName = "AUTH";
    super(AuthClient, config);
  }

  async signUp(username: string, password: string) {
    const req = new SignUpRequest();
    req.setUserName(username);
    req.setPassword(password);
    return await this.gRPCClientRequest<SignUpReply.AsObject>("signUp", req);
  }

  async login(username: string, password: string) {
    const req = new LoginRequest();
    req.setUserName(username);
    req.setPassword(password);
    return await this.gRPCClientRequest<LoginReply.AsObject>("login", req);
  }
}

export default rpcAuthClient;
