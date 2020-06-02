import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder, private ps: OrderService) {
    this.createForm();
   }
 
   createForm() {
    this.angForm = this.fb.group({
      Name: ['', Validators.required ],
      Email: ['', Validators.required ],
      ContactNo: ['', Validators.required ],
      Address: ['', Validators.required ],
      City: ['', Validators.required ],
      State: ['', Validators.required ],
      Country: ['', Validators.required ],
      ShippingAddress: ['', Validators.required ],
      Products: ['', Validators.required ],
      Qty: ['', Validators.required ],
      Payment: ['', Validators.required ]

    });
  }
  addorder(Name,Email,ContactNo,Address,City,State,Country,ShippingAddress,Products,Qty,Payment) {
    this.ps. addorder(Name,Email,ContactNo,Address,City,State,Country,ShippingAddress,Products,Qty,Payment);
  }
  ngOnInit() {
  }

}
