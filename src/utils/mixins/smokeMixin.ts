import { Component, Vue } from 'vue-property-decorator';
import catalyzerParamData from '../../utils/catalyzerParamData';
@Component
export default class SmokeMixin extends Vue {
  scrInSmokeNum = 0;
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
  get enumHole() {
    return catalyzerParamData.map(item => {
      return {
        value: item.hole,
        label: `${item.hole} X ${item.hole}`
      }
    });
  }
}