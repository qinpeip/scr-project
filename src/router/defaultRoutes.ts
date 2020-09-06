import { RouteConfig } from "vue-router";

const homeChildren: RouteConfig[] = [
  {
    path: '/home',
    name: 'home',
    component: () => import(/*webpackChunkName: Home*/ '../Home'),
    redirect: {name: 'smokeParam'},
    children: [
      {
        path: 'smokeParam',
        name: 'smokeParam',
        component: () => import(/*webpackChunkName: SmokeParam */'../views/SmokeParam'),
        meta: {
          title: '烟气参数',
          label: 'smokeParam'
        }
      },
      {
        path: 'catalyzerParam',
        name: 'catalyzerParam',
        component: () => import(/*webpackChunName: CatalyzerParam */ '../views/CatalyzerParam'),
        meta: {
          title: '催化剂参数',
          label: 'catalyzerParam'
        }
      },
      {
        path: 'industryConsult',
        name: 'industryConsult',
        component: () => import(/*webpackChunkName:IndustryConsult */ '../views/IndustryConsult'),
        meta: {
          title: '行业参考',
          label: 'industryConsult'
        }
      },
      {
        path: 'emissionStandard',
        name: 'emissionStandard',
        component: () => import(/*webpackChunkName: EmissionStandard*/'../views/EmissionStandard'),
        meta: {
          title: '排放标准',
          label: 'emissionStandard'
        }
      },
      {
        path: 'other',
        name: 'other',
        component: () => import(/*webpackChunkName: Other*/'../views/Other'),
        meta: {
          title: '其他',
          label: 'other'
        }
      },
    ]
  }
];

export const adminRoute: RouteConfig = {
  path: 'account',
  name: 'account',
  component: () => import(/*webpackChunkName:Account */'../views/Account'),
  meta: {
    title: '账号管理',
    label: 'account'
  }
} 

export default homeChildren;