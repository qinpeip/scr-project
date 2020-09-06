import { Component, Vue } from 'vue-property-decorator';
import '@/assets/css/login.less';
import { Form, FormItem, Input, Button, Message } from 'element-ui';
import loginApi from './apis/login';
import userApi from './apis/user';
@Component
export default class Login extends Vue {
  private isLoading = false;
  private formData = {
    username: '',
    password: ''
  }
  render() {
    const rules = {
      username: [
        {required: true, message: '请输入用户名', trigger: 'blur'}
      ],
      password: [
        {required: true, message: '请输入密码', trigger: 'blur'}
      ]
    };
    return (
      <div class="login-wrap">
        <div class="ms-login">
          <div class="ms-title">
            后台管理系统
          </div>
          <Form props={{
            model: this.formData,
            rules: rules
          }} class="ms-form" ref="form">
            <FormItem prop="username">
              <Input v-model={this.formData.username} size="small">
                <Button slot="prepend" icon="el-icon-user" size="small"></Button>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input v-model={this.formData.password} size="small" type="password" 
              nativeOnkeydown={(e: KeyboardEvent) => {
                if (e.keyCode === 13) {this.loginHandle()}
              }} ref="passwordRef">
                <Button nativeOnfocus={() => {
                  (this.$refs.passwordRef as Input).focus();
                }} slot="prepend" icon="el-icon-lock" size="small"></Button>
              </Input>
            </FormItem>
            <FormItem>
              <Button loading={this.isLoading} 
              onClick={this.loginHandle} 
              class="login-button" type="primary">登录</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
  loginHandle() {
    (this.$refs.form as Form).validate(async valid => {
      if(valid) {
        this.isLoading = true;
        loginApi.loginHandle(this.formData).then((res) => {
          if (res.data.status === 'Success') {
            window.location.reload();
            // userApi.getUserInfo();
          } else {
            Message.error(res.data.message || '');
          }
          this.isLoading = false;
        }).catch(() => this.isLoading = false);
      }
    }) 
  }
}