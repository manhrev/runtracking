import {
  DataSource,
  ListDataSource,
  ListDataSetRequest,
  AggregateByRequest,
  ListBucket,
  AGGREGATES_BY,
} from '../../../constants/googleapi'
import { restAbstractClient } from '../abstract/restClient'

class restGoogleFitClient extends restAbstractClient {
  constructor(baseUrl: string, defaultHeaders?: Record<string, string>) {
    super(baseUrl, defaultHeaders)
  }

  async listDataSources(): Promise<ListDataSource> {
    const response = await this.get<ListDataSource>('/dataSources')
    return response
  }

  async listDataSets(req: ListDataSetRequest): Promise<ListBucket> {
    const body = {
      aggregateBy: [AGGREGATES_BY.cal, AGGREGATES_BY.dis, AGGREGATES_BY.min],
      endTimeMillis: req.endTimeNanoSeconds,
      startTimeMillis: req.startTimeNanoSeconds,
    } as AggregateByRequest

    const response = await this.post<ListBucket>('/dataset:aggregate', body)
    return response
  }
}

export default restGoogleFitClient
