import { Component, Mixins } from 'vue-property-decorator';
import { Row, Col, Form, FormItem, InputNumber, Select, Option, Button } from 'element-ui';
import SmokeMixin from '../utils/mixins/smokeMixin';
@Component
export default class SmokeParam extends Mixins(SmokeMixin) {
  render() {
    return (
      <Form class="smoke-form" label-width="150px" style={{minHeight: '100%', background: '#fff'}}>
        <Row>
          <Col class="bd-b-common" span={24}>
            <Col class="bd-r-common" span={8}>
              <FormItem label="SCR进口烟气量:">
                <InputNumber v-model={this.scrInSmokeNum} size="small" controls={false}/>
                <span class="field-comments">Nm3/h</span>
              </FormItem>
              <FormItem label="SCR脱硝温度:">
                <InputNumber v-model={this.scrDenitrationTem} size="small" controls={false}/>
                <span class="field-comments">°C</span>
              </FormItem>
              <FormItem label="进口S0x浓度:">
                <InputNumber v-model={this.inS0xConcentration} size="small" controls={false}/>
                <span class="field-comments">mg/Nm3</span>
              </FormItem>
              <FormItem label="进口颗粒物浓度:">
                <InputNumber v-model={this.inGrainConcentration} size="small" controls={false}/>
                <span class="field-comments">mg/Nm3</span>
              </FormItem>
              <FormItem label="H20含量:">
                <InputNumber v-model={this.H20Content} size="small" controls={false}/>
                <span class="field-comments">%</span>
              </FormItem>
            </Col>
            <Col class="bd-r-common" span={8}>
              <FormItem label="颗粒物成分:"></FormItem>
              <FormItem label="Ca0含量:">
                <InputNumber v-model={this.Ca0HasNum} size="small" controls={false} />
                <span class="field-comments">%</span>
              </FormItem>
              <FormItem label="N2a0含量:">
                <InputNumber v-model={this.N2a0HasNum} size="small" controls={false} />
                <span class="field-comments">%</span>
              </FormItem>
              <FormItem label="Si02含量:">
                <InputNumber v-model={this.Si02HasNum} size="small" controls={false} />
                <span class="field-comments">%</span>
              </FormItem>
              <FormItem label="其他含量:">
                <InputNumber v-model={this.otherHasNum} size="small" controls={false} />
                <span class="field-comments">%</span>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="烟气其他成分:"></FormItem>
              <FormItem label="HCL含量:">
                <InputNumber v-model={this.HCLHasNum} size="small" controls={false} />
                <span class="field-comments">mg/Nm3</span>
              </FormItem>
              <FormItem label="HF含量:">
                <InputNumber v-model={this.HFHasNum} size="small" controls={false} />
                <span class="field-comments">mg/Nm3</span>
              </FormItem>
              <FormItem label="V0Cs含量:">
                <InputNumber v-model={this.V0CsHasNum} size="small" controls={false} />
                <span class="field-comments">mg/Nm3</span>
              </FormItem>
              <FormItem label="C0含量:">
                <InputNumber v-model={this.C0HasNum} size="small" controls={false} />
                <span class="field-comments">mg/Nm3</span>
              </FormItem>
            </Col>
          </Col>
          <Col class="bd-b-common" span={24}>
            <Col class="bd-r-common" span={8}>
              <FormItem label="进口N0x浓度:">
                <InputNumber v-model={this.inN0xConcentration} size="small" controls={false} />
                <span class="field-comments">mg/Nm3</span>
              </FormItem>
              <FormItem label="N0x排放浓度:">
                <InputNumber v-model={this.N0xOutConcentration} size="small" controls={false} />
                <span class="field-comments">mg/Nm3</span>
              </FormItem>
            </Col>
            <Col class="bd-r-common" span={8}>
              <FormItem label="氧浓度:">
                <InputNumber v-model={this.oxygenConcentration} size="small" controls={false} />
                <span class="field-comments">%</span>
              </FormItem>
              <FormItem label="基准氧:">
                <InputNumber v-model={this.baseOxygen} size="small" controls={false} />
                <span class="field-comments">%</span>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="氨水浓度:">
                <InputNumber v-model={this.ammoniaConcentration} size="small" controls={false} />
                <span class="field-comments">%</span>
              </FormItem>
              <FormItem label="氨逃逸率:">
                <InputNumber v-model={this.ammoniaEscapeRatio} size="small" controls={false} />
                <span class="field-comments">ppm</span>
              </FormItem>
            </Col>
          </Col>
          <Col class="bd-b-common" span={24}>
            <Col class="bd-r-common" span={12}>
              <FormItem label="确定模块数量:"></FormItem>
              <FormItem label="预设催化剂孔数:">
                <Select v-model={this.preHoleNum} size="small" style={{width: '130px'}} filterable>
                  {
                    this.enumHole.map(item => (
                      <Option value={item.value} label={item.label} />
                    ))
                  }
                </Select>
              </FormItem>
              <FormItem label="催化剂模块单元布置:">
                <InputNumber v-model={this.catalyzerUnit1} size="small" precision={0}
                controls={false} style={{width: '50px'}} />
                <span class="field-comments">&nbsp;&nbsp;X&nbsp;&nbsp;</span>
                <InputNumber v-model={this.catalyzerUnit2} size="small" precision={0}
                controls={false} style={{width: '50px'}} />
              </FormItem>
              <FormItem label="预设催化剂孔道流度:">
                <InputNumber v-model={this.preCatalyzerFlow} size="small" controls={false} />
                <span class="field-comments">m/s</span>
              </FormItem>
              <FormItem label=" ">
                <Button size="small" type="primary" onClick={this.adjustAccountsHandle}>
                  核算
                  {/* {this.catalyzerArea} + {this.singleModuleCatalyzerArea} */}
                </Button>
              </FormItem>
              <FormItem label="单层催化剂模块数量:">
                <InputNumber v-model={this.singleCatalyzerModuleNum} size="small" controls={false}/>
                 {/* <div class="readonly-input-number">{this.singleCatalyzerModuleNum}</div> */}
                <span class="field-comments">个</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="催化剂模块截面尺寸:">
                <InputNumber v-model={this.catalyzerSectionSize1} size="small" controls={false} 
                style={{width: '100px'}} />
                <span class="field-comments">&nbsp;X&nbsp;</span>
                <InputNumber v-model={this.catalyzerSectionSize2} size="small" controls={false} 
                style={{width: '100px'}} />
              </FormItem>
              <FormItem label="单仓模块布置方式:">
                <InputNumber v-model={this.singleSetMethod1} size="small" controls={false} 
                style={{width: '100px'}} />
                <span class="field-comments">&nbsp;X&nbsp;</span>
                <InputNumber v-model={this.singleSetMethod2} size="small" controls={false} 
                style={{width: '100px'}} />
              </FormItem>
              <FormItem label="单仓反应器内尺寸:">
                <InputNumber v-model={this.singleReactorSize1} size="small" controls={false} 
                style={{width: '100px'}} />
                <span class="field-comments">&nbsp;X&nbsp;</span>
                <InputNumber v-model={this.singleReactorSize2} size="small" controls={false} 
                style={{width: '100px'}} />
              </FormItem>
              <FormItem label="预设反应器仓数:">
                <InputNumber v-model={this.preReactorWare} size="small" />
                <span class="field-comments">仓</span>
              </FormItem>
              <FormItem label="预设反应器层数:">
                <InputNumber v-model={this.preReactorLayer} size="small" />
                <span class="field-comments">层</span>
              </FormItem>
              <FormItem label="预设催化剂面速度:">
                <InputNumber v-model={this.preCatalyzerSpeed} size="small" controls={false} />
                <span class="field-comments">m/h</span>
              </FormItem>
            </Col>
          </Col>
          <Col class="bd-b-common" span={24}>
            <Col class="bd-r-common" span={12} style={{textAlign: 'center', padding: '5px 0'}}>
              <Button size="small" type="primary" onClick={this.calculationHandle}>计算</Button>
            </Col>
            <Col span={12} style={{textAlign: 'center', padding: '5px 0'}}>
              <Button size="small" type="primary">输出</Button>
            </Col>
          </Col>
          <Col span={24}>
            <Col class="bd-r-common" span={12}>
              <FormItem label="催化剂单体高度:">
                <InputNumber ref="catalyzerSingleHeight" v-model={this.catalyzerSingleHeight} size="small" controls={false} />
                <span class="field-comments">mm</span>
              </FormItem>
              <FormItem label="实际催化剂孔道流度:">
                <InputNumber v-model={this.realCatalyzerHoleFlow} size="small" controls={false} />
                <span class="field-comments">m/s</span>
              </FormItem>
              <FormItem label="催化剂脱硝效率:">
                <InputNumber v-model={this.catalyzerDenitrationRatio} size="small" controls={false} />
                <span class="field-comments">%</span>
              </FormItem>
              <FormItem label="反应器截面流度:">
                <InputNumber v-model={this.reactorSectionFlow} size="small" controls={false} />
                <span class="field-comments">m/s</span>
              </FormItem>
              <FormItem label="催化剂空速:">
                <InputNumber v-model={this.catalyzerEmptySpeed} size="small" controls={false} />
                <span class="field-comments">h-1</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="催化剂模块尺寸:">
                <InputNumber v-model={this.catalyzerModuleSize1} size="small" controls={false} style={{width: '50px'}} />
                <span class="field-comments">&nbsp;&nbsp;X&nbsp;&nbsp;</span>
                <InputNumber v-model={this.catalyzerModuleSize2} size="small" controls={false} style={{width: '50px'}} />
                <span class="field-comments">&nbsp;&nbsp;X&nbsp;&nbsp;</span>
                <InputNumber v-model={this.catalyzerModuleSize3} size="small" controls={false} style={{width: '50px'}} />
              </FormItem>
              <FormItem label="氨水消耗量:">
                <InputNumber v-model={this.ammoniaExpend} size="small" controls={false} />
                <span class="field-comments">kg/h</span>
              </FormItem>
              <FormItem label="催化剂面速度:">
                <InputNumber v-model={this.catalyzerSectionSpeed} size="small" controls={false} />
                <span class="field-comments">m/h</span>
              </FormItem>
              <FormItem label="单层催化剂压降:">
                <InputNumber v-model={this.singleCatalyzerPa} size="small" controls={false} />
                <span class="field-comments">pa</span>
              </FormItem>
              <FormItem label="催化剂体积:">
                <InputNumber v-model={this.catalyzerM3} size="small" controls={false} />
                <span class="field-comments">m3</span>
              </FormItem>
            </Col>
          </Col>
        </Row>
      </Form>
    )
  }
  adjustAccountsHandle() {
    // 核算单层催化剂模块数量
    this.singleCatalyzerModuleNum = +(+this.catalyzerArea / +this.singleModuleCatalyzerArea).toFixed(2);
    // 核算催化剂模块截面尺寸
    this.catalyzerSectionSize1 = this.catalyzerUnit1 * 160;
    this.catalyzerSectionSize2 = this.catalyzerUnit2 * 160;
    // 核算单仓模块布置方式
    this.singleSetMethod1 = 1;
    this.singleSetMethod2 = this.singleLayerModuleNum;
    // 核算单仓反应器尺寸
    this.singleReactorSize1 = this.singleSetMethod1 * this.catalyzerSectionSize1 + 30*(this.singleSetMethod1 + 1);
    this.singleReactorSize2 = this.singleSetMethod2 * this.catalyzerSectionSize2 + 30*(this.singleSetMethod2 + 1);
  }
  calculationHandle() {
    const { singleModuleCatalyzerArea, singleCatalyzerModuleNum, scrInSmokeNum, AlternateUnits,
      preReactorWare, preReactorLayer, singleLayerModuleNum, CurrentSelectHole } = this;
    // 根据反应器可计算出催化剂高度，根据催化剂高度进行催化剂单体高度的确定
    // 催化剂预计用量=标况烟气量/空速
    // 催化剂高度=催化剂预计用量/（单模块催化剂截面积*反应仓数量*单层模块数量）
    // 催化剂单体高度=催化剂高度/催化剂层数 （实际应用应比计算值高）
    const catalyzerPreUseNum = 0;
    const catalyzerHeight = catalyzerPreUseNum/(+singleModuleCatalyzerArea*singleCatalyzerModuleNum*preReactorWare);
    this.catalyzerSingleHeight = catalyzerHeight / preReactorLayer;
    // 催化剂孔道流速= 工况烟气量/（3600*单模块催化剂截面积*开孔率*反应仓数量*单层模块数量）
    this.realCatalyzerHoleFlow = scrInSmokeNum / (AlternateUnits*+singleModuleCatalyzerArea*preReactorWare*singleLayerModuleNum*(CurrentSelectHole.openHoleRatio/100))
    this.realCatalyzerHoleFlow = +this.realCatalyzerHoleFlow.toFixed(2);
    // 3）反应器截面流速
    // 反应器截面流速= 工况烟气量/（3600*反应仓数量*反应器尺寸）
    this.reactorSectionFlow = (scrInSmokeNum / (3600*preReactorWare))
  }
}