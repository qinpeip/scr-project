import { Component, Vue } from 'vue-property-decorator';
import { Container, Aside, Main, Header, Menu, MenuItem, Button } from 'element-ui';

@Component
export default class Home extends Vue {
  render() {
    return (
      <Container style={{height: '100%'}}>
        <Aside width="150px">
          <Menu style={{height: '100%'}} background-color="#545c64"
  text-color="#fff">
            <MenuItem>导航1</MenuItem>
            <MenuItem>导航2</MenuItem>
          </Menu>
        </Aside>
        <Container direction="vertical">
          <Header class="flex-h-center" style={{justifyContent: 'space-between',borderBottom: '1px solid #eee'}}>
            <div>123</div>
            <Button style={{float: 'right'}} type="text">退出</Button>
          </Header>
          <Main style={{backgroundColor: '#f8f8fa'}}>
            主体
          </Main>
        </Container>
      </Container>
    )
  }
}