import {
  ListGroupReply,
  ListGroupRequest,
  CreateGroupRequest,
  CreateGroupReply,
  GroupInfo,
  UpdateGroupRequest,
  UpdateGroupReply,
  JoinGroupReply,
  JoinGroupRequest,
  DeleteGroupRequest,
  DeleteGroupReply,
  ListMembersOfGroupRequest,
  ListMembersOfGroupReply,
  AcceptMemberRequest,
  AcceptMemberReply,
} from '../../../lib/group/group_pb'
import { GRPCClientConfig } from '../abstract/types'
import gRPCClientAbstract from '../abstract/gRPCClient'
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb'
import { GroupClient } from '../../../lib/group/GroupServiceClientPb'

class rpcGroupClient extends gRPCClientAbstract {
  constructor(config: GRPCClientConfig) {
    config.serviceName = 'GROUP'
    super(GroupClient, config)
  }

  async listGroup(param: ListGroupRequest.AsObject) {
    const req = new ListGroupRequest()
    req.setAscending(param.ascending)
    req.setLimit(param.limit)
    req.setOffset(param.offset)
    req.setSortBy(param.sortBy)
    req.setSearchByName(param.searchByName)
    req.setFilterBy(param.filterBy)

    return await this.gRPCClientRequest<ListGroupReply.AsObject>(
      'listGroup',
      req
    )
  }

  async createGroup(param: CreateGroupRequest.AsObject) {
    const info = new GroupInfo()
    info.setName(param.groupInfo?.name || '')
    info.setDescription(param.groupInfo?.description || '')
    info.setBackgroundPicture(param.groupInfo?.backgroundPicture || '')
    info.setId(param.groupInfo?.id || 0)

    const req = new CreateGroupRequest()
    req.setGroupInfo(info)
    return await this.gRPCClientRequest<CreateGroupReply.AsObject>(
      'createGroup',
      req
    )
  }

  async updateGroup(param: UpdateGroupRequest.AsObject) {
    const newInfo = new GroupInfo()
    newInfo.setName(param.groupinfo?.name || '')
    newInfo.setDescription(param.groupinfo?.description || '')
    newInfo.setBackgroundPicture(param.groupinfo?.backgroundPicture || '')
    newInfo.setId(param.groupinfo?.id || 0)

    const req = new UpdateGroupRequest()
    req.setGroupinfo(newInfo)
    return await this.gRPCClientRequest<UpdateGroupReply.AsObject>(
      'updateGroup',
      req
    )
  }
  async joinGroup(param: JoinGroupRequest.AsObject) {
    const req = new JoinGroupRequest()
    req.setGroupId(param.groupId)

    return await this.gRPCClientRequest<JoinGroupReply.AsObject>(
      'joinGroup',
      req
    )
  }

  async deleteGroup(param: DeleteGroupRequest.AsObject) {
    const req = new DeleteGroupRequest()
    req.setIdToDelete(param.idToDelete)
    return await this.gRPCClientRequest<DeleteGroupReply.AsObject>(
      'deleteGroup',
      req
    )
  }

  // member
  async listMembersOfGroup(param: ListMembersOfGroupRequest.AsObject) {
    const req = new ListMembersOfGroupRequest()
    req.setGroupId(param.groupId)
    req.setAscending(param.ascending)
    req.setLimit(param.limit)
    req.setOffset(param.offset)
    req.setSortBy(param.sortBy)
    req.setSearchByName(param.searchByName)
    req.setStatus(param.status)

    return await this.gRPCClientRequest<ListMembersOfGroupReply.AsObject>(
      'listMembersOfGroup',
      req
    )
  }

  async acceptMember(param: AcceptMemberRequest.AsObject) {
    const req = new AcceptMemberRequest()
    req.setGroupId(param.groupId)
    req.setMemberId(param.memberId)

    return await this.gRPCClientRequest<AcceptMemberReply.AsObject>(
      'acceptMember',
      req
    )
  }
}

export default rpcGroupClient
