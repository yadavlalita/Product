import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../user.servise';


@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {
  angForm: FormGroup;
  user: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ps: UsersService, private fb: FormBuilder) {
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

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.edituser(params.id).subscribe(res => {
        this.user = res;
    });
  });
  }
  updateuser(Distributor,Credit_Cash, Bill_ChallanDate,Bill_ChallanNo,Barcode,MRP,Qty,Amount) {
    this.route.params.subscribe(params => {
      this.ps.updateuser(Distributor,Credit_Cash, Bill_ChallanDate,Bill_ChallanNo,Barcode,MRP,Qty,Amount, params.id);
      this.router.navigate(['users']);
    });
  }
}


