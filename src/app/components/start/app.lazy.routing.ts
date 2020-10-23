import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { UserAuthorizationService, PageAccess, CanActivatePage } from "../../domain/authorization";

import { REQUEST_METHOD_LIST, REQUEST_METHOD_FULL } from "../../domain/const";
import { UnAuthorizedComponent } from "../../components/unauthorized/unauthorized.component";
import { LoginComponent } from "../../components/login/login/login.component";
import { NotFoundComponent } from "../../components/not-found/not-found.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { HomeComponent } from '../home/home.component';



const APP_LAZY_ROUTES: Routes = [
    {
        path: 'home',
        component: HomeComponent, data: { anonymous: true }, canActivate: [PageAccess],
  
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login',
        component: LoginComponent, data: { anonymous: true }, canActivate: [PageAccess],
    },
  
    {
        path: 'unauthorized', component: UnAuthorizedComponent,
    },
    {
       // path: 'dashboard',component: DashboardComponent, canActivate:[CanActivatePage],data:{rolePermission:false}
        path: 'dashboard', loadChildren: './components/dashboard/dashboard.module#DashboardModule',
        canActivate: [PageAccess],  data: { rolePermission:false},
        //data: { rolePermission:false }
    },
    
    
	{
        path: 'users',
        loadChildren: './components/registration/users/users.module#UsersModule',
        data: { anonymous: true }, canActivate: [PageAccess]
    },
    {
        path: 'client',
        loadChildren: './components/registration/users/users.module#UsersModule',
        //data: { anonymous: true }, canActivate: [PageAccess]
    },
	{
        path: 'user-orders',
        loadChildren: './components/registration/user-orders/user-orders.module#UserOrdersModule',
    },
	
	
	{
        path: 'user-messages',
        loadChildren: './components/user-message/user-messages/user-messages.module#UserMessagesModule',
    },
    {
        path: '**',
        component: HomeComponent, data: { anonymous: true }, canActivate: [PageAccess],
        // path: 'home', loadChildren: './components/home/home.module#HomeModule',
        // canActivate: [PageAccess],  data: { anonymous: true},
        // //data: { rolePermission:false }
    },
   
//route-paths
];


export const APP_LAZY_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_LAZY_ROUTES, { preloadingStrategy: PreloadAllModules });
