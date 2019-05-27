import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule,Http, XHRBackend, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { ProductServiceService } from './services/product-service.service';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './componets/home/home.component';
import { ProductComponent } from './componets/product/product.component';
import { LoginComponent } from './componets/login/login.component';
import { RegisterComponent } from './componets/register/register.component';
import { httpFactory } from '@angular/http/src/http_module';
import { AccountComponent } from './componets/admin/account/account.component';
import { TransactionComponent } from './componets/admin/transaction/transaction.component';
import { PaymentComponent } from './componets/admin/payment/payment.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { NavbarAdminComponent } from './componets/navbar-admin/navbar-admin.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule,HttpModule,HttpClientModule ],
  declarations: [ AppComponent, AppRoutingModule.components, HomeComponent, ProductComponent, LoginComponent, RegisterComponent, AccountComponent, TransactionComponent, PaymentComponent, NavbarComponent, NavbarAdminComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductServiceService]
})
export class AppModule { }