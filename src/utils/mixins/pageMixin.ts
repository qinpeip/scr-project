import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PageMixins extends Vue {
  page = 1;
  pageSize = 10;
  total = 0;
}