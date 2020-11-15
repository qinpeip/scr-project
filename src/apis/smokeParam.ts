import baseApi from './baseApi';
class SmokeParamApi extends baseApi {
  constructor() {
    super('');
  }
  async generateWordFile(params: any) {
      return this.service.post(`word/generate`, params);
  }
}

export default new SmokeParamApi();