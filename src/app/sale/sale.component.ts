import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SalesService } from '../sales.service';


@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder, private ps: SalesService) {
    this.createForm();
   }
   createForm() {
    this.angForm = this.fb.group({
     
      Counter_Home: ['', Validators.required ],
    SaleDate: ['', Validators.required ],
      Category: ['', Validators.required ],
      Products: ['', Validators.required ],
      Amount: ['', Validators.required ]
    

    });
  }
  addsale(Counter_Home,SaleDate,Category,Products,Amount) {
    this.ps.addsale(Counter_Home,SaleDate,Category,Products,Amount);
  }
  ngOnInit() {
  }

}
