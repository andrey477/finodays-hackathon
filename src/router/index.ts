import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home/Home.vue';
import { RouteNames } from '@/router/routeNames';
import CreditPage from '@/views/CreditPage/CreditPage.vue';
import MortgagePage from '@/views/MortgagePage/MortgagePage.vue';
import AboutPage from '@/views/AboutPage/AboutPage.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/credit',
    name: RouteNames.CREDIT,
    component: CreditPage,
  },
  {
    path: '/mortgage',
    name: RouteNames.MORTGAGE,
    component: MortgagePage,
  },
  {
    path: '/about',
    name: RouteNames.ABOUT,
    component: AboutPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
