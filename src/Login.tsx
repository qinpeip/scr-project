import { Component, Vue } from 'vue-property-decorator';
import '@/assets/css/login.less';
import { Form, FormItem, Input, Button } from 'element-ui';
@Component
export default class Login extends Vue {
  private username = '';
  private password = '';
  private isLoading = false;
  render() {
    return (
      <div class="login-wrap">
        <div class="ms-login">
          <div class="ms-title">
            后台管理系统
          </div>
          <Form class="ms-form">
            <FormItem>
              <Input v-model={this.username} size="small">
                <Button slot="prepend" icon="el-icon-user" size="small"></Button>
              </Input>
            </FormItem>
            <FormItem>
              <Input v-model={this.password} size="small" type="password">
                <Button slot="prepend" icon="el-icon-lock" size="small"></Button>
              </Input>
            </FormItem>
            <FormItem>
              <Button loading={this.isLoading} onClick={this.loginHandle} class="login-button" type="primary">登录</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
  loginHandle() {
    console.log('login');
    this.isLoading = true;
  }
}