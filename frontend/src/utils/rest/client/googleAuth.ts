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

}

export default restGoogleAuthClient;