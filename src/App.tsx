import { Component, Vue } from 'vue-property-decorator';
import userApi from './apis/user';
@Component
export default class App extends Vue {
  render() {
    return <router-view></router-view>
  }
  created() {
    this.getUserInfo();
  }
  private getUserInfo() {
    userApi.getUserInfo();
  }
  get userData() {
    return this.$store.state;
  }
}