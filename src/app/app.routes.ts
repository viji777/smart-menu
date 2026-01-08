import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/cart/cart.page').then(m => m.CartPage),
  },
];
