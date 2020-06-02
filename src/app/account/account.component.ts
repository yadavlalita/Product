import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountsService } from '../accounts.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: AccountsService) { 
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
     
      AccountName: ['', Validators.required ],
      Type: ['', Validators.required ],
      Address: ['', Validators.required ],
      ContactPerson: ['', Validators.required ],
      ContactNumber: ['', Validators.required ],
      GST_Tin_no: ['', Validators.required ],
      Balance: ['', Validators.required ]
    

    });
  }
  addacc(AccountName,Type,Address,ContactPerson,ContactNumber,GST_Tin_no,Balance) {
    this.ps.addacc(AccountName,Type,Address,ContactPerson,ContactNumber,GST_Tin_no,Balance);
  }
  ngOnInit() {
  }

}
