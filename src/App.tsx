import { Component, Vue } from 'vue-property-decorator';
import Login from './Login';
import Home from './Home';
@Component
export default class App extends Vue {
  render() {
    const { userData } = this;
    // return userData.name ? <Home /> : <Login />
    return <Home />
  }
  get userData() {
    return this.$store.state;
  }
}