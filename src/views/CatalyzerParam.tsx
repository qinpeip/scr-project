import { Component, Vue } from 'vue-property-decorator';
import { Table, TableColumn, Dialog, Button, CheckboxGroup, Checkbox } from 'element-ui';
import catalyzerParamData from '../utils/catalyzerParamData';
@Component
export default class CatalyzerParam extends Vue {
  render() {
    return (
      <div style={{height: '100%'}}>
        <Table data={this.filterCatalyzerParamData} height="100%">
          <TableColumn label="孔数" prop="hole" fixed
          ScopedSlots={{
            default: ({row}: {row: any}) => (
              <span>{`${row.hole}孔`}</span>
            ),
            header: () => (
              <div>
                孔数
                <i class="el-icon-s-tools" onClick={this.setShowHoleNum} style={{cursor: 'pointer'}}></i>
              </div>
            )
          }}/>
          <TableColumn label="外壁厚" prop="outWallThickness"/>
          <TableColumn label="内壁厚" prop="inWallThickness"/>
          <TableColumn label="节距" prop="aperture"/>
          <TableColumn label="孔径" prop="pitch"/>
          <TableColumn label="开孔率" prop="openHoleRatio"/>
          <TableColumn label="比表面积" prop="specificSurfaceArea"/>
        </Table>
        <Dialog visible={this.isShowDialog} title="过滤孔数"
        on={{
          'update:visible': () => this.isShowDialog = false
        }}>
          <CheckboxGroup v-model={this.defaultCheckedHoles}>
            {
              this.allHoles.map(item => (
                <Checkbox label={item} value={item}>{`${item}孔`}</Checkbox>
              ))
            }
          </CheckboxGroup>
          <span slot="footer">
            <Button size="small" onClick={() => this.isShowDialog = false}>取消</Button>
            <Button size="small" type="primary" onClick={this.confirmFilter}>确认</Button>
          </span>
        </Dialog>
      </div>
    )
  }
  private isShowDialog = false;
  private defaultCheckedHoles = [13, 15, 16, 18, 20, 21, 22, 25, 30, 35, 40, 45];
  private filterCatalyzerParamData = Array<any>();
  created() {
    this.filterCatalyzerParamData = catalyzerParamData.filter(item => {
      return this.defaultCheckedHoles.includes(item.hole);
    });
  }
  private setShowHoleNum() {
    this.isShowDialog = true;
  }
  private confirmFilter() {
    this.filterCatalyzerParamData = catalyzerParamData.filter(item => {
      return this.defaultCheckedHoles.includes(item.hole);
    });
    this.isShowDialog = false;
  }
  private get allHoles() {
    return catalyzerParamData.map(item => item.hole);
  }
}