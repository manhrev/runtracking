import {
  GroupInfo, ChallengeInfo, ChallengeRuleInfo,
  ListGroupReply, ListGroupRequest,
  GetGroupRequest, GetGroupReply,
  CreateGroupRequest, CreateGroupReply,
  UpdateGroupRequest, UpdateGroupReply,
  JoinGroupRequest, JoinGroupReply,
  DeleteGroupRequest, DeleteGroupReply,
  ListMembersOfGroupRequest, ListMembersOfGroupReply,
  AcceptMemberRequest, AcceptMemberReply,
  LeaveGroupRequest, LeaveGroupReply,
  ListChallengeRequest, ListChallengeReply,
  CreateChallengeRequest, CreateChallengeReply,
  DeleteChallengeRequest, DeleteChallengeReply,
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

  async getGroup(param: GetGroupRequest.AsObject) {
    const req = new GetGroupRequest()
    req.setGroupId(param.groupId)

    return await this.gRPCClientRequest<GetGroupReply.AsObject>(
      'getGroup',
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

  async leaveGroup(param: LeaveGroupRequest.AsObject) {
    const req = new LeaveGroupRequest()
    req.setGroupId(param.groupId)

    return await this.gRPCClientRequest<LeaveGroupReply.AsObject>(
      'leaveGroup',
      req
    )
  }

  // challenge
  async listChallenge(param: ListChallengeRequest.AsObject) {
    const req = new ListChallengeRequest()
    req.setGroupId(param.groupId)
    req.setAscending(param.ascending)
    req.setLimit(param.limit)
    req.setOffset(param.offset)
    req.setSortBy(param.sortBy)
    req.setSearchByName(param.searchByName)
    req.setFilterByRulesList(param.filterByRulesList)
    req.setFilterByType(param.filterByType)
    req.setStatus(param.status)

    // // dont need
    // req.setFrom(new Timestamp().setSeconds(param.from?.seconds || 0))
    // req.setTo(new Timestamp().setSeconds(param.to?.seconds || 0))

    return await this.gRPCClientRequest<ListChallengeReply.AsObject>(
      'listChallenge',
      req
    )
  }
  
  async createChallenge(param: CreateChallengeRequest.AsObject) {
    const challengeRuleInfo = new ChallengeRuleInfo()
    challengeRuleInfo.setRule(param.challengeinfo?.challengerulesList[0]?.rule || 0)
    challengeRuleInfo.setId(param.challengeinfo?.challengerulesList[0]?.id || 0)
    challengeRuleInfo.setGoal(param.challengeinfo?.challengerulesList[0]?.goal || 0)
    challengeRuleInfo.setCreatedAt(
      new Timestamp().setSeconds(param.challengeinfo?.challengerulesList[0]?.createdAt?.seconds || 0)
    )
    challengeRuleInfo.setUpdatedAt(
      new Timestamp().setSeconds(param.challengeinfo?.challengerulesList[0]?.updatedAt?.seconds || 0)
    )


    const challengeInfo = new ChallengeInfo()
    challengeInfo.setName(param.challengeinfo?.name || '')
    challengeInfo.setDescription(param.challengeinfo?.description || '')
    challengeInfo.setPicture(param.challengeinfo?.picture || '')
    challengeInfo.setType(param.challengeinfo?.type || 0)
    challengeInfo.setStatus(param.challengeinfo?.status || 0)
    challengeInfo.setFrom(
      new Timestamp().setSeconds(param.challengeinfo?.from?.seconds || 0)
    )
    challengeInfo.setTo(
      new Timestamp().setSeconds(param.challengeinfo?.to?.seconds || 0)
    )
    challengeInfo.setChallengerulesList([challengeRuleInfo])
    
    // dont need
    challengeInfo.setId(param.challengeinfo?.id || 0)
    challengeInfo.setGroupId(param.challengeinfo?.groupId || 0)
    challengeInfo.setMemberProgressListList([])
    challengeInfo.setCompletedFirstMember(undefined)

    // main req
    const req = new CreateChallengeRequest()
    req.setGroupId(param.groupId)
    req.setChallengeinfo(challengeInfo)

    return await this.gRPCClientRequest<CreateChallengeReply.AsObject>(
      'createChallenge',
      req
    )
  }

  async deleteChallenge(param: DeleteChallengeRequest.AsObject) {
    const req = new DeleteChallengeRequest()
    req.setId(param.id)

    return await this.gRPCClientRequest<DeleteChallengeReply.AsObject>(
      'deleteChallenge',
      req
    )
  }
}

export default rpcGroupClient
