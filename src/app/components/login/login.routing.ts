import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const LOGIN_ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: { anonymous: true }
  },
];

export const LOGIN_ROUTING: ModuleWithProviders = RouterModule.forChild(LOGIN_ROUTES);
