import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import config from '../config';

class CatAPI extends RESTDataSource {
  public constructor() {
    super();
    this.baseURL = 'https://api.thecatapi.com';
  }

  protected willSendRequest(req: RequestOptions): void {
    req.headers.set('x-api-key', config.apiKey);
  }
}

export default CatAPI;
