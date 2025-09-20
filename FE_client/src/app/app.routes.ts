import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Layout } from './shared/components/layout/layout';

export const routes: Routes = [
     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'login', component: Login },
       {
    path: '',
    component:Layout,
    children: [
     {
        path: 'dashboard',
        loadComponent: () =>
          import(
            './components/dashboard/dashboard'
          ).then((c) => c.Dashboard),
      },
    ]
},

];
