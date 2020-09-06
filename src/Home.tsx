import { Component, Vue } from 'vue-property-decorator';
import { Container, Aside, Main, Header, Dropdown,
  DropdownItem, DropdownMenu, Avatar, MessageBox } from 'element-ui';
import ScrMenu from './views/Menu';
import loginApi from './apis/login';
import './assets/css/home.less';
@Component
export default class Home extends Vue {
  render() {
    return (
      <Container style={{height: '100%'}}>
        <Aside class="flex-column" width="150px">
          <Header class="main-header flex-h-center" style={{
            fontSize:'22px', borderRight: '1px solid rgba(238, 241, 146, 0.3)'}}>
            SCR
          </Header>
          <ScrMenu />
        </Aside>
        <Container direction="vertical">
          <Header class="flex-h-center main-header">
            <div>{this.subTitle}</div>
            <Dropdown trigger="hover">
              <span style={{cursor: 'pointer',color: '#fff'}}>
                {this.userName}&nbsp;&nbsp;<Avatar style={{verticalAlign: 'middle'}} icon="el-icon-user-solid"/>
              </span>
              <DropdownMenu slot="dropdown">
                <DropdownItem nativeOnClick={this.logoutHandle}>退出登录</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Header>
          <Main style={{backgroundColor: '#f8f8fa'}}>
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
          </Main>
        </Container>
      </Container>
    )
  }
  private logoutHandle() {
    MessageBox.confirm('您确定要退出吗?', '提示').then(() => {
      loginApi.logoutHandle();
    });
  }
  get subTitle() {
    return this.$store.state.subTitle;
  }
  get userName() {
    return this.$store.state.userInfo.username;
  }
}
