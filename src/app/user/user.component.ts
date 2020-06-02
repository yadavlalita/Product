import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../user.servise';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: UsersService) {
    this.createForm();
   }
     
  createForm() {
    this.angForm = this.fb.group({
     
      Distributor: ['', Validators.required ],
      Credit_Cash: ['', Validators.required ],
      Bill_ChallanDate: ['', Validators.required ],
      Bill_ChallanNo: ['', Validators.required ],
      Barcode: ['', Validators.required ],
     MRP: ['', Validators.required ],
     Qty: ['', Validators.required ],
     Amount: ['', Validators.required ]

    });
  }
  
  adduser(Distributor,Credit_Cash, Bill_ChallanDate,Bill_ChallanNo,Barcode,MRP,Qty,Amount) {
    this.ps.adduser(Distributor,Credit_Cash, Bill_ChallanDate,Bill_ChallanNo,Barcode,MRP,Qty,Amount);
  }



  ngOnInit() {
  }

}
