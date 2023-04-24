import { DataSource, User } from "../../../constants/googleapi";
import { restAbstractClient } from "../abstract/restClient";

class restGoogleAuthClient extends restAbstractClient {
  constructor(baseUrl: string, defaultHeaders?: Record<string, string>) {
    super(baseUrl, defaultHeaders);
  }

  async getMe(): Promise<User> {
    const response = await this.get<User>('/me');
    return response;
  }

//   async getStepsForDate(date: string) {
//     const response = await this.get(`/fitness/v1/users/me/dataset:aggregate`, {
//       params: {
//         'aggregateBy': [{ 'dataTypeName': 'com.google.step_count.delta', 'dataSourceId': 'derived:com.google.step_count.delta:com.google.android.gms:estimated_steps' }],
//         'bucketByTime': { 'durationMillis': 86400000 },
//         'startTimeMillis': new Date(date).setHours(0, 0, 0, 0),
//         'endTimeMillis': new Date(date).setHours(23, 59, 59, 999)
//       }
//     });
//     return response.data;
//   }
}

export default restGoogleAuthClient;