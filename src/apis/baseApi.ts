import service from '../utils/service';
export default class BaseApi {
  public api = '';
  public service = service;
  constructor(api: string) {
    this.api = api;
  }
}