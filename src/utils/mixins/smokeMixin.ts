import { Component, Vue } from 'vue-property-decorator';
import catalyzerParamData, { CatalyzerParamDatas } from '../../utils/catalyzerParamData';
@Component
export default class SmokeMixin extends Vue {
  scrInSmokeNum = 0;
  biaokuangSmokeNum = 0;
  scrDenitrationTem = 0;
  inS0xConcentration = 0;
  inGrainConcentration = 0;
  H20Content = 0;
  inN0xConcentration = 0;
  N0xOutConcentration = 0;
  Ca0HasNum = 0;
  N2a0HasNum = 0;
  Si02HasNum = 0;
  otherHasNum = 0;
  oxygenConcentration = 0;
  baseOxygen = 0;
  HCLHasNum = 0;
  HFHasNum = 0;
  V0CsHasNum = 0;
  C0HasNum = 0;
  ammoniaConcentration = 0;
  ammoniaEscapeRatio = 0;
  preHoleNum = 13;
  catalyzerUnit1 = 6;
  catalyzerUnit2 = 12;
  preCatalyzerFlow = 0;
  singleCatalyzerModuleNum = 0;
  catalyzerSectionSize1 = 0;
  catalyzerSectionSize2 = 0;
  singleSetMethod1 = 0;
  singleSetMethod2 = 0;
  singleReactorSize1 = 0;
  singleReactorSize2 = 0;
  preReactorWare = 0;
  preReactorLayer = 0;
  preCatalyzerSpeed = 0;
  catalyzerSingleHeight = 0;
  catalyzerSingleHeightView = 0;
  realCatalyzerHoleFlow = 0;
  catalyzerDenitrationRatio = 0;
  reactorSectionFlow = 0;
  catalyzerEmptySpeed = 0;
  catalyzerModuleSize1 = 0;
  catalyzerModuleSize2 = 0;
  catalyzerModuleSize3 = 0;
  ammoniaExpend = 0;
  catalyzerSectionSpeed = 0;
  singleCatalyzerPa = 0;
  catalyzerM3 = 0;
  // 换算单位
  AlternateUnits = 3600;
  // 中间变量
  get catalyzerArea() { // 催化剂截面积
    const { scrInSmokeNum, preCatalyzerFlow } = this;
    const { openHoleRatio } = this.CurrentSelectHole as CatalyzerParamDatas;
    const catalyzerArea = scrInSmokeNum / (openHoleRatio/100*3600*preCatalyzerFlow);
    return catalyzerArea.toFixed(2);
  }
  get singleModuleCatalyzerArea () { //单模块催化剂截面积
    const { catalyzerUnit1, catalyzerUnit2 } = this;
    const singleModuleCatalyzerArea = ((catalyzerUnit1*150*catalyzerUnit2*150)/1000000);
    return +singleModuleCatalyzerArea.toFixed(2);
  }
  get CurrentSelectHole() {
    const currentHole = catalyzerParamData.find(item => item.hole === this.preHoleNum);
    return currentHole as CatalyzerParamDatas;
  }
  get preSpeed() { // 预设空速
    console.log(this.preCatalyzerSpeed, this.CurrentSelectHole.specificSurfaceArea)
    const perSpeed = this.preCatalyzerSpeed * this.CurrentSelectHole.specificSurfaceArea;
    return +perSpeed.toFixed(2);
  }
  get catalyzerPreUsed() { // 催化剂预计用量
    return +(this.biaokuangSmokeNum / this.preSpeed).toFixed(2);
  }
  // 催化剂高度=催化剂预计用量/(单模块催化剂截面积*预设反应器仓数*单层催化剂模块数量);
  // 2021-01-25修改：催化剂高度=催化剂预计用量/(单模块催化剂截面积*单层催化剂模块数量);
  get catalyzerHeight() {
    return +(this.catalyzerPreUsed/(this.singleModuleCatalyzerArea * Math.ceil(this.singleCatalyzerModuleNum))).toFixed(2);
  }
  get lilunAmmoniaExpend() { 
    //氨的摩尔质量计17； NOx的摩尔质量计46
    //理论氨消耗量= 标况烟气量*（入口NOx值-出口NOx值）*氨的摩尔质量/（1000*1000*NOx的摩尔质量*氨水浓度）
    return +(this.biaokuangSmokeNum*(this.inN0xConcentration-this.N0xOutConcentration)*17/
    (1000*1000*16*this.ammoniaConcentration))
  }
  get enumHole() {
    return catalyzerParamData.map(item => {
      return {
        value: item.hole,
        label: `${item.hole} X ${item.hole}`
      }
    });
  }
  get catalyzerSingleHeightWidthM() { //催化剂单体高度 ====》 单位m；
    return +(this.catalyzerSingleHeight/10000).toFixed(2);
  }
  get unitM3() { // 单元体积
    return 0.15*0.15*(this.catalyzerSingleHeightView/1000);
  }
  get unitFaceArea() { //单元表面积
    return this.unitM3 * this.CurrentSelectHole.specificSurfaceArea;
  }
  get unitWeight() { // 单元重量
    return this.unitM3 * (this.CurrentSelectHole.bulkDensity || 0);
  }
  get moduleInCHJNumber() { // 模块内催化剂件数
    return this.catalyzerUnit1 * this.catalyzerUnit2;
  }
  get moduleInCHJM3() { // 模块内催化剂体积
    return this.moduleInCHJNumber * this.unitM3;
  }
  get moduleInCHJFaceArea() { // 模块内催化剂表面积
    return this.moduleInCHJM3 * this.CurrentSelectHole.specificSurfaceArea;
  }
  get moduleInCHJWeight() { // 模块内催化剂净重
    return this.moduleInCHJM3 * (this.CurrentSelectHole.bulkDensity || 0);
  }
  get totalCHJArea() { // 催化剂总面积
    return this.catalyzerM3 * this.CurrentSelectHole.specificSurfaceArea;
  }
  get totalCHJWeightByNet() { // 催化剂总净重
    return this.catalyzerM3 * this.CurrentSelectHole.bulkDensity;
  }
  get moduleCaseWeight() { // 模块箱重量
    return (this.catalyzerModuleSize1/1000)*(this.catalyzerModuleSize3/1000)*0.003*7850*2+(this.catalyzerModuleSize2/1000)*(this.catalyzerModuleSize3/1000)*0.003*7850*2+(this.catalyzerModuleSize1/1000)*0.25*0.003*7850*2+(((this.catalyzerModuleSize2-20)/1000)/2)*0.05*0.006*7850*12+((this.catalyzerModuleSize1-20)/1000)*0.05*0.006*7850*24+9.4;
  }
  get totalModuleWeight() { // 模块总重
    return this.moduleInCHJWeight + this.moduleCaseWeight;
  }
  get totalCHJWeight() { // 催化剂总重量
    return this.totalModuleWeight * this.singleCatalyzerModuleNum;
  }
  get urea() {
    return this.ammoniaExpend * this.ammoniaConcentration / 100;
  }
}