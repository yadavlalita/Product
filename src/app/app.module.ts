import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { HelloComponent } from './paymenttostaff/hello.component';
import { SheetJSComponent } from './paymenttostaff/sheet.component';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductsService } from './products.service';
import { CustomersService } from './customers.service';
import { StaffsService } from './staffs.service';
import { OrderService } from './order.service';
import { UsersService } from './user.servise';
import { SalesService } from './sales.service';
import { AccountsService } from './accounts.service';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerGetComponent } from './customer-get/customer-get.component';
import { StaffAddComponent } from './staff-add/staff-add.component';
import { StaffGetComponent } from './staff-get/staff-get.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { SalereturnService } from './salereturn.service';

import { UserComponent } from './user/user.component';

import { UsergetComponent } from './userget/userget.component';
import { UsereditComponent } from './useredit/useredit.component';
import { SaleComponent } from './sale/sale.component';

import { AccountComponent } from './account/account.component';
import { OrderComponent } from './order/order.component';

import { PaymentComponent } from './payment/payment.component';
import { PaymentService} from './payment.service';
import { ReturnComponent } from './return/return.component';
import {ReturnService} from './return.service';
import { SalereturnComponent } from './salereturn/salereturn.component';;
//import { StaffaccComponent } from './staffacc/staffacc.component';
import { PaytostaffComponent } from './paytostaff/paytostaff.component';;
import { PaymenttostaffComponent } from './paymenttostaff/paymenttostaff.component'
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        ProductAddComponent,
        ProductGetComponent,
        ProductEditComponent,
        CustomerAddComponent,
        CustomerEditComponent ,
        CustomerGetComponent ,
        StaffAddComponent,
        StaffEditComponent,
        StaffGetComponent ,
        UserComponent ,
        UsergetComponent ,
        UsereditComponent ,
        SaleComponent ,
        AccountComponent,
        PaymentComponent,
        ReturnComponent,
        SalereturnComponent,
        PaytostaffComponent,
        HelloComponent, SheetJSComponent,
        PaymenttostaffComponent,
        OrderComponent],
       
      
       
        
        
       
    providers: [ProductsService,CustomersService,StaffsService,UsersService,SalesService,AccountsService,
        OrderService,PaymentService,ReturnService,SalereturnService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }