import { Routes, RouterModule } from '@angular/router';

import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductGetComponent } from './product-get/product-get.component';

import {CustomerAddComponent} from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerGetComponent } from './customer-get/customer-get.component';

import {StaffAddComponent} from './staff-add/staff-add.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { StaffGetComponent } from './staff-get/staff-get.component';
import {SalereturnComponent} from './salereturn/salereturn.component';


import {UserComponent} from './user/user.component'; 
import {UsergetComponent} from './userget/userget.component';
import { OrderComponent} from './order/order.component';

import {SaleComponent} from './sale/sale.component';
import {AccountComponent} from './account/account.component';
import {PaymentComponent} from './payment/payment.component';
import { ReturnComponent } from './return/return.component';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import {PaymenttostaffComponent} from './paymenttostaff/paymenttostaff.component';
const appRoutes: Routes = [
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'product/create',
        component: ProductAddComponent
      },
      {
        path: 'edit/:id',
        component: ProductEditComponent
      },
      {
        path: 'products',
        component: ProductGetComponent
      },
      {
        path: 'customers',
        component: CustomerGetComponent
      },
      {
        path: 'staff/create',
        component: StaffAddComponent
      },
      
      {
        path: 'create/account',
        component: AccountComponent
      },
     {
        path: 'staffs',
        component: StaffGetComponent
      },
      {
        path: 'customer/create',
        component: CustomerAddComponent
      },
     
      {
        path: 'create/user',
        component: UserComponent
      },
      {
        path: 'users',
        component: UsergetComponent
      },
      {
        path: 'sale',
        component: SaleComponent
      },
      {
        path: 'Order',
        component: OrderComponent
      },
      {
        path: 'payment',
        component: PaymentComponent
      },
      {
        path: 'return',
        component: ReturnComponent
      },
      {
        path: 'salereturn',
        component: SalereturnComponent
      },
      {
        path: 'paymenttostaff',
        component: PaymenttostaffComponent
      },
      /*{
        path: 'edit/:id',
        component: CustomerEditComponent
      },*/

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);