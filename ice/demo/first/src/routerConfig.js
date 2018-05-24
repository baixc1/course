// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import BlankLayout from './layouts/BlankLayout';
import Home from './pages/Home';
import Page3 from './pages/Page3';
import HeaderAsideFooterResponsiveLayout from './layouts/HeaderAsideFooterResponsiveLayout';
import HeaderAsideFooterLayout from './layouts/HeaderAsideFooterLayout';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import NotFound from './pages/NotFound';

const routerConfig = [
  {
    path: '/',
    layout: BlankLayout,
    component: Home,
  },
  {
    path: '/page3',
    layout: HeaderAsideFooterResponsiveLayout,
    component: Page3,
  },
  {
    path: '/page4',
    layout: HeaderAsideFooterLayout,
    component: Page4,
  },
  {
    path: '/page5',
    layout: HeaderAsideFooterLayout,
    component: Page5,
  },
  {
    path: '*',
    layout: BlankLayout,
    component: NotFound,
  },
];

export default routerConfig;
