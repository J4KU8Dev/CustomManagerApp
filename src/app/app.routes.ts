import { Routes } from '@angular/router';
import { App } from './app';
import { CustomerDetails } from './customer-details/customer-details';

export const routes: Routes = [
    // { path:'**', component:PageNotFound},
    { path: 'dashboard', component: App },
    // { path: 'customer', component: CustomerDetails },
    { path: 'customer/:id', component: CustomerDetails },
];
