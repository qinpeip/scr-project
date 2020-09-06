import baseApi from './baseApi';
import Res from '@/types/service';
import user from './user';
interface LoginParams {
  username: string;
  password: string;
}
class LoginApi extends baseApi {
  constructor() {
    super('');
  }
  async loginHandle(params: LoginParams) {
    return this.service.post<Res>('/login', params);
  }
  async logoutHandle() {
    await this.service.get('login/logout');
    user.getUserInfo();
  }
}

export default new LoginApi();