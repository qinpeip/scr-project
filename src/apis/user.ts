import baseApi from './baseApi';
import router from '../router';
import homeChildren, { adminRoute } from '../router/defaultRoutes';
import Res from '@/types/service';
import UserInfo from '@/types/userinfo';
import store from '@/store';
import { RouteConfig } from 'vue-router';
interface UserRes extends Res {
  user: UserInfo;
}
interface UserListRes extends Res {
  data: {
    data: UserInfo[];
    total: number;
  };
}
interface GetUserListParams {
  page: number;
  pageSize: number;
  phone?: string;
}
class UserApi extends baseApi {
  constructor() {
    super('');
  }
  async getUserInfo() {
    this.service.get<UserRes>('user/info').then(res => {
      if (res.data.status === 'Error') {
        router.replace({name: 'login'});
      } else {
        store.commit('setUser', res.data.user);
        if (res.data.user.id === 1) {
          (homeChildren[0].children as RouteConfig[]).push(adminRoute);
        }
        store.commit('setMenus', homeChildren[0].children);
        router.addRoutes(homeChildren);
        const currentRouteName = window.sessionStorage.getItem('currentRouteName');
        if (res.data.user.id !== 1 && currentRouteName === 'account') {
          router.push({name:'home'});
        } else {
          router.push({name: currentRouteName || 'home'});
        }
      }
    });
  }
  async getUserList(params: GetUserListParams) {
    return this.service.get<UserListRes>('user/list', {params});
  }
  async addUser(params: UserInfo) {
    return this.service.post('user/add', params);
  }
  async editUser(params: UserInfo) {
    return this.service.post('user/edit', params);
  }
  async removeUser(id: number) {
    return this.service.get(`user/delete/${id}`);
  }
  async hasSameUserName(username: string) {
    return this.service.get(`user/username/${username}`);
  }
}

export default new UserApi();