import { Routes } from '@angular/router';
import { CustomerDetails } from './customer-details/customer-details';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: Dashboard },
    // { path:'**', component:PageNotFound},
    { path: 'customer/:id', component: CustomerDetails },
];
