import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home/Home.vue';
import { RouteNames } from '@/router/routeNames';
import MortgagePage from '@/views/MortgagePage/MortgagePage.vue';
import AboutPage from '@/views/AboutPage/AboutPage.vue';
import NewMortgagePage from '@/views/NewMortgagePage/NewMortgagePage.vue';
import MortgagesPage from '@/views/MortgagesPage/MortgagesPage.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/mortgage',
    name: RouteNames.MORTGAGE,
    component: MortgagePage,
  },
  {
    path: '/mortgages',
    name: RouteNames.MORTGAGES,
    component: MortgagesPage,
  },
  {
    path: '/about',
    name: RouteNames.ABOUT,
    component: AboutPage,
  },
  {
    path: '/new-product',
    name: RouteNames.NEW_PRODUCT,
    component: NewMortgagePage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
