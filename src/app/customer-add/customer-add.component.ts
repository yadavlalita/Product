import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

 angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: CustomersService) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      FName: ['', Validators.required ],
      LName: ['', Validators.required ],
      MName: ['', Validators.required ],
      Email: ['', Validators.required ],
      ContactNo: ['', Validators.required ],
      Address: ['', Validators.required ],
      City: ['', Validators.required ],
      State: ['', Validators.required ],
      DOB: ['', Validators.required ],
      CreatedDate: ['', Validators.required ],
      UpdatedDate: ['', Validators.required ]
    });
  }

  addcustomer(FName,LName,MName,Email,ContactNo,Address,City,State,DOB,CreatedDate,UpdatedDate) {
    this.ps.addcustomer(FName,LName,MName,Email,ContactNo,Address,City,State,DOB,CreatedDate,UpdatedDate);
  }

  ngOnInit() {
  }

}
