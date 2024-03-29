import { AuthClient } from '../../../lib/auth/AuthServiceClientPb'
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
  GetUsersPublicInfoRequest,
  GetUsersPublicInfoReply,
  ListUserInfoRequest,
  ListUserInfoReply,
} from '../../../lib/auth/auth_pb'

import { GRPCClientConfig } from '../abstract/types'
import gRPCClientAbstract from '../abstract/gRPCClient'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'

class rpcAuthClient extends gRPCClientAbstract {
  constructor(config: GRPCClientConfig) {
    config.serviceName = 'AUTH'
    super(AuthClient, config)
  }

  async signUp(param: SignUpRequest.AsObject) {
    const req = new SignUpRequest()
    req.setUserName(param.userName)
    req.setPassword(param.password)
    req.setDisplayName(param.displayName)

    return await this.gRPCClientRequest<SignUpReply.AsObject>('signUp', req)
  }

  async logIn(param: LoginRequest.AsObject) {
    const req = new LoginRequest()
    req.setUserName(param.userName)
    req.setPassword(param.password)
    return await this.gRPCClientRequest<LoginReply.AsObject>('login', req)
  }

  async logOut() {
    const req = new Empty()
    return await this.gRPCClientRequest<Empty.AsObject>('logOut', req)
  }

  async getMe() {
    const req = new Empty()
    return await this.gRPCClientRequest<MeReply.AsObject>('me', req)
  }

  async updateHealthInfo(param: HealthRecordRequest.AsObject) {
    const req = new HealthRecordRequest()
    req.setAge(param.age)
    req.setHeight(param.height)
    req.setWeight(param.weight)
    return await this.gRPCClientRequest<Empty.AsObject>('setHealthRecord', req)
  }

  async updateUserInfo(param: UpdateUserInfoRequest.AsObject) {
    const req = new UpdateUserInfoRequest()
    const userInfo = new UserInfo()
    userInfo.setDisplayName(param.userInfo?.displayName || '')
    userInfo.setEmail(param.userInfo?.email || '')
    userInfo.setPhoneNumber(param.userInfo?.phoneNumber || '')
    userInfo.setProfilePicture(param.userInfo?.profilePicture || '')
    userInfo.setAge(param.userInfo?.age || 0)
    userInfo.setHeight(param.userInfo?.height || 0)
    userInfo.setWeight(param.userInfo?.weight || 0)

    req.setUserInfo(userInfo)

    return await this.gRPCClientRequest<UpdateUserInfoReply.AsObject>(
      'updateUserInfo',
      req
    )
  }

  async getUsersPublicInfo(param: GetUsersPublicInfoRequest.AsObject) {
    const req = new GetUsersPublicInfoRequest()
    req.setUserIdsList(param.userIdsList || [])

    return await this.gRPCClientRequest<GetUsersPublicInfoReply.AsObject>(
      'getUsersPublicInfo',
      req
    )
  }

  async listUserInfo(param: ListUserInfoRequest.AsObject) {
    const req = new ListUserInfoRequest()
    req.setLimit(param.limit)
    req.setOffset(param.offset)
    req.setAscending(param.ascending)
    req.setSortBy(param.sortBy)
    req.setUserIdsList(param.userIdsList || [])
    req.setSearchByName(param.searchByName || '')

    return await this.gRPCClientRequest<ListUserInfoReply.AsObject>(
      'listUser',
      req
    )
  }
}

export default rpcAuthClient
