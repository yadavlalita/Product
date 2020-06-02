import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  angForm: FormGroup;
  
  constructor(private fb: FormBuilder, private ps: ProductsService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      Barcode: ['', Validators.required ],
      ProductCategory: ['', Validators.required ],
      Name: ['', Validators.required ],
      Distributor: ['', Validators.required ],
     GST: ['', Validators.required ],
     MRP: ['', Validators.required ],
      ExpiryDate: ['', Validators.required ]
     
     
    });
  }

  addProduct(Barcode,ProductCategory,Name,Distributor,GST,MRP,ExpiryDate) {
    this.ps.addProduct(Barcode,ProductCategory,Name,Distributor,GST,MRP,ExpiryDate);
  }

  ngOnInit() {
  }

}
