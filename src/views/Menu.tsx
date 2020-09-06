import { Component, Vue } from 'vue-property-decorator';
import { Menu, MenuItem } from 'element-ui';
import store from '../store';
const menus = [
  {
    title: '烟气参数',
    label: 'smokeParam'
  },
  {
    title: '催化剂参数',
    label: 'catalyzerParam'
  },
  {
    title: '行业参考',
    label: 'industryConsult'
  },
  {
    title: '排放标准',
    label: 'emissionStandard'
  },
  {
    title:'其他',
    label: 'other'
  }
];

@Component
export default class ScrMenu extends Vue {
  private defaultActive = '';
  render() {
    return (
      <Menu style={{flex: 1}} 
      background-color="#eef1f6"
      text-color="#48576a"
      active-text-color="#20a0ff"
      default-active={this.defaultActive}
      >
        {
          this.menus.map((menu: {title: string; label: string}) => (
            <MenuItem onClick={() => this.onMenuClickHandle(menu)} 
            index={menu.label}>{menu.title}</MenuItem>
          ))
        }
      </Menu>
    )
  }
  mounted() {
    store.commit('setSubTitle', this.$route.meta.title);
    this.defaultActive = this.$route.meta.label;
  }
  private onMenuClickHandle(menu: {title: string; label: string}) {
    this.defaultActive = menu.label;
    store.commit('setSubTitle', menu.title);
    this.$route.name !== menu.label&&this.$router.push({name: menu.label});
    window.sessionStorage.setItem('currentRouteName', menu.label);
  }
  get menus() {
    return this.$store.state.menus;
  }
}