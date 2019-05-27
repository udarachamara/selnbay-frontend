import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../../services/payment.service';
import { Payment } from '../../../models/payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public payments:Array<Payment>;

  constructor(private paymentServiceService:PaymentService) { 

  }

  ngOnInit() {
    this.paymentServiceService.getPayments().subscribe((data)=>{
      this.payments = data;
    });
  }

  editPayment(id){
    alert(id);
  }

  deletePayment(id){
    alert(id);
  }

}
