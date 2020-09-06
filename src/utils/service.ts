import axios from 'axios';
import router from '@/router';
import { Message } from 'element-ui';
const url = 'http://127.0.0.1:8000';
// const url = 'http://49.232.24.242';
const service = axios.create({
  timeout: 5000,
  baseURL: url,
  withCredentials: true
});

service.interceptors.response.use((response) => {
  if (response.data.status === 'Error') {
    if (response.data.code === 4001) {
      router.replace({name: 'login'});
      Message.error('登录已失效');
      return response;
    }
  }
  return response;
}, err => {
  Promise.reject(err);
})
export default service;