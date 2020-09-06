import { Component, Mixins } from 'vue-property-decorator';
import PageMixin from '../utils/mixins/pageMixin';
import { Row, Col, Input, Button, Table, TableColumn,
  Pagination, Dialog, Form, FormItem, RadioGroup, Radio, InputNumber, ButtonGroup, Message, MessageBox } from 'element-ui';
  import moment from 'moment';
import userApi from '../apis/user';
import UserInfo from '@/types/userinfo';
@Component
export default class Account extends Mixins(PageMixin) {
  render() {
    const formData = this.formData;
    const rules = {
      username: [
        {required: true, message: '请输入用户名称', trigger: 'blur'},
        {min: 3, message: '用户名不能少于3个字符', trigger: 'blur'}
      ],
      password: [
        {required: true, message: '请输入密码', trigger: 'blur'},
        {min: 6, message: '密码不能少于6个字符', trigger: 'blur'}
      ],
      confirmPassword: [
        {required: true, message: '请输入确认密码', trigger: 'blur'},
        {validator: (rule: any, value: string, callback: (a?: any) => void) => {
          if (value !== formData.password) {
            return callback(new Error('两次密码输入不一致'));
          } else {
            return callback();
          }
        }, trigger: 'blur'}
      ]
    };
    return (
      <Row gutter={6} type="flex" style={{height: '100%',flexDirection: 'column'}}>
        <Col style={{background: '#fff', padding: '5px 5px'}} span={24}>
          <Col span={6}>
            <Input v-model={this.phone} placeholder="手机号" size="small"></Input>
          </Col>
          <Col span={4}>
            <Button size="small" type="primary" onClick={() => {
              this.page = 1;
              this.getUserList();
            }}>搜索</Button>
            <Button size="small" type="primary" onClick={this.addHandle}>新建</Button>
          </Col>
        </Col>
        <Col style={{background: '#fff', padding: '5px 5px',
        margin: '10px 0', flex: 1,display: 'flex', flexDirection: 'column'}} span={24}>
          <Table data={this.userList} style={{flex: 1}} height="auto">
            <TableColumn label="#" prop="id"></TableColumn>
            <TableColumn label="用户名" prop="username"></TableColumn>
            <TableColumn label="性别" prop="gender"
            ScopedSlots={{
              default: ({row}: {row: UserInfo}) => (
                <span>{+(row.gender as string) === 1 ? '男' : '女'}</span>
              )
            }}></TableColumn>
            <TableColumn label="手机号" prop="phone"></TableColumn>
            <TableColumn label="创建时间" prop="createAt"
            ScopedSlots={{
              default: ({row}: {row: UserInfo}) => (
                row.createAt && <span>{moment(row.createAt).format('YYYY-MM-DD hh:mm:ss')}</span>
              )
            }}></TableColumn>
            <TableColumn label="操作"
             ScopedSlots={{
               default: ({row}: {row: UserInfo}) => (
                 <div>
                    <Button type="primary" size="small" onClick={() => this.editUserHandle(row)}>编辑</Button>
                    {row.id!==1 && <Button type="danger" size="small" onClick={
                      () => this.removeUserHandle(row.id as number)
                    }>删除</Button>}
                 </div>
               )
             }}></TableColumn>
          </Table>
          <div>
            <Pagination style={{float: 'right'}} 
            background layout="prev, pager, next, total" 
            page-size={this.pageSize}
            current-page={this.page}
            total={this.total}
            {...{
              on: {
                'current-change': (page: number) => {
                  this.page = page;
                  this.getUserList();
                }
              }
            }}/>
          </div>
        </Col>
        {
          this.isShowDialog && <Dialog visible={this.isShowDialog} title={this.dialogTitle} width="500px"
          on={{
            'update:visible': () => this.isShowDialog = false
          }}>
            <Form props={{
              model: formData,
              rules: rules
            }}>
              <FormItem label="用户名" prop="username" label-width="100px">
                <Input v-model={formData.username} size="small"></Input>
              </FormItem>
              <FormItem label="密码" prop="password" label-width="100px">
                <Input v-model={formData.password} size="small" type="password"></Input>
              </FormItem>
              <FormItem label="确认密码" prop="confirmPassword" label-width="100px">
                <Input v-model={formData.confirmPassword} size="small" type="password"></Input>
              </FormItem>
              <FormItem label="手机号" label-width="100px">
                <Input v-model={formData.phone} size="small"></Input>
              </FormItem>
              <FormItem label="年龄" label-width="100px">
                <InputNumber v-model={formData.age} controls={false} precision={0} size="small" />
              </FormItem>
              <FormItem label="性别" label-width="100px">
                <RadioGroup v-model={formData.gender}>
                  <Radio label={0}>女</Radio>
                  <Radio label={1}>男</Radio>
                </RadioGroup>
              </FormItem>
            </Form>
            <span slot="footer">
              <Button size="small" onClick={() => this.isShowDialog = false}>取消</Button>
              <Button size="small" type="primary" onClick={this.addUserHandle}>确认</Button>
            </span>
          </Dialog>
        }
      </Row>
    )
  }
  private userList: UserInfo[] = [];
  private isShowDialog = false;
  private phone = '';
  private formData = {
    username: '',
    password: '',
    confirmPassword: '',
    phone: '',
    age: 20,
    gender: 1,
    id: 0
  };
  private dialogTitle = '';
  created() {
    this.getUserList();
  }
  private async getUserList() {
    const params = {
      page: this.page,
      pageSize: this.pageSize,
      phone: this.phone
    };
    const { data } =await userApi.getUserList(params);
    this.userList = data.data.data;
    this.total = data.data.total;
  }
  private addHandle() {
    this.dialogTitle = '创建用户';
    this.formData = {
      username: '',
      password: '',
      confirmPassword: '',
      phone: '',
      age: 20,
      gender: 1,
      id: 0
    };
    this.isShowDialog = true;
  }
  private editUserHandle(row: UserInfo) {
    this.dialogTitle = '编辑用户';
    this.formData.username = row.username;
    this.formData.password = '';
    this.formData.confirmPassword = '';
    this.formData.phone = row.phone as string;
    this.formData.age = +(row.age as string);
    this.formData.gender = +(row.gender as string) || 1;
    this.formData.id = row.id as number;
    this.isShowDialog = true;
  }
  private async addUserHandle() {
    if (this.dialogTitle === '编辑用户') {
      const {data} = await userApi.hasSameUserName(this.formData.username);
      if (data.data && +data.data.id !== +this.formData.id) {
        Message.error('用户名已存在');
        return;
      }
      await userApi.editUser(this.formData);
      Message.success('修改成功');
    } else {
      const {data} = await userApi.hasSameUserName(this.formData.username);
      if (data.data) {
        Message.error('用户名已存在');
        return;
      }
      await userApi.addUser(this.formData);
      Message.success('新建成功');
    }
    this.getUserList();
    this.isShowDialog = false;
  }
  private async removeUserHandle(id: number) {
    MessageBox.confirm('您确定要删除吗?', '提示').then(async () => {
      await userApi.removeUser(id);
      Message.success('删除成功');
      this.getUserList();
    });
  }
}