import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReturnService } from '../return.service';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder, private ps: ReturnService) {
    this.createForm();
   }

   createForm() {
    this.angForm = this.fb.group({
      Barcode: ['', Validators.required ],
      ProductName: ['', Validators.required ],
      City: ['', Validators.required ],
      State: ['', Validators.required ],
      PostalCode: ['', Validators.required ],
      Country: ['', Validators.required ],
      Name: ['', Validators.required ],
      Email: ['', Validators.required ],
      Reason: ['', Validators.required ]    

    });
  }
  addreturn(Barcode,ProductName,City,State,PostalCode,Country,Name,Email,Reason) {
    this.ps.  addreturn(Barcode,ProductName,City,State,PostalCode,Country,Name,Email,Reason);
  }
  ngOnInit() {
  }

}
