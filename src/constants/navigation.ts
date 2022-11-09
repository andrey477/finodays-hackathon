import { Navigation } from '@/types/base';
import { RouteNames } from '@/router/routeNames';

export const navigation: Navigation[] = [
  {
    name: 'Кредиты',
    route: RouteNames.CREDIT,
  },
  {
    name: 'Ипотека',
    route: RouteNames.MORTGAGE,
  },
  {
    name: 'О нас',
    route: RouteNames.ABOUT,
  },
];
