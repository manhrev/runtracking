import { ListGroupReply, ListGroupRequest } from '../../../lib/group/group_pb'
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
}

export default rpcGroupClient
