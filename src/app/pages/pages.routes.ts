import { Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import { CartComponent } from './cart/cart.component';
import { BillerComponent } from './biller/biller.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: StarterComponent,
    data: {
      title: 'Starter',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Starter' },
      ],
    },
  },
  {
    path: 'cart',
    component: CartComponent,
    data: {
      title: 'Starter',
      urls: [
        { title: 'Dashboard', url: '/cart' },
        { title: 'Starter' },
      ],
    },
  },
  {
    path: 'biller',
    component: BillerComponent,
    data: {
      title: 'Starter',
      urls: [
        { title: 'Dashboard', url: '/biller' },
        { title: 'Starter' },
      ],
    },
  },
];
