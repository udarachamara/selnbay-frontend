import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './componets/home/home.component';
import { ProductComponent } from './componets/product/product.component';
import { PaymentComponent } from './componets/admin/payment/payment.component';
import { TransactionComponent } from './componets/admin/transaction/transaction.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'admin-payment', component: PaymentComponent },
  { path: 'admin-transaction', component: TransactionComponent },
  { path: 'admin', component: PaymentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [
  ];
}

