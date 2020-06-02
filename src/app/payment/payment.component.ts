import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder, private ps: PaymentService) {
    this.createForm();
   }

   
   createForm() {
    this.angForm = this.fb.group({
      Challan_Bill: ['', Validators.required ],
      Distributors: ['', Validators.required ],
      Balance: ['', Validators.required ],
      Payments: ['', Validators.required ],
      BillStatus: ['', Validators.required ],

    });
  }

  
  addpayment(Challan_Bill,Distributors,Balance,Payments,BillStatus) {
    this.ps. addpayment(Challan_Bill,Distributors,Balance,Payments,BillStatus);
  }

  ngOnInit() {
  }

}
