import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SalereturnService } from '../salereturn.service';


@Component({
  selector: 'app-salereturn',
  templateUrl: './salereturn.component.html',
  styleUrls: ['./salereturn.component.css']
})
export class SalereturnComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder, private ps: SalereturnService) {
    this.createForm();
   }
   
   createForm() {
    this.angForm = this.fb.group({
     
     
      BillNumber: ['', Validators.required ],
      Barcode: ['', Validators.required ],
     MRP: ['', Validators.required ],
     Qty: ['', Validators.required ]
    

    });
  }
  addsalereturn(BillNumber,Barcode,MRP,Qty){
    this.ps. addsalereturn(BillNumber,Barcode,MRP,Qty);
  }
  ngOnInit() {
  }

}
