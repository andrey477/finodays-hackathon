import { Navigation } from '@/types/base';
import { RouteNames } from '@/router/routeNames';

export const navigation: Navigation[] = [
  {
    name: 'Ипотека',
    route: RouteNames.MORTGAGES,
  },
  // {
  //   name: 'О нас',
  //   route: RouteNames.ABOUT,
  // },
  {
    name: 'Новый продукт',
    route: RouteNames.NEW_PRODUCT,
  },
];
