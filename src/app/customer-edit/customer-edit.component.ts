import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  angForm: FormGroup;
  customer: any = {};

  constructor
    (private route: ActivatedRoute, private router: Router, private ps: CustomersService, private fb: FormBuilder) {
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
  ngOnInit() { this.route.params.subscribe(params => {
    this.ps.editCustomer(params.id).subscribe(res => {
      this.customer = res;
  });
});

  }


  updateCustomer(FName,LName,MName,Email,ContactNo,Address,City,State,DOB,CreatedDate,UpdatedDate) {
    this.route.params.subscribe(params => {
      this.ps.updateCustomer(FName,LName,MName,Email,ContactNo,Address,City,State,DOB,CreatedDate,UpdatedDate, params.id);
      this.router.navigate(['customers']);
    });
  }
}
