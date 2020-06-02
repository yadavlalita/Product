import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  angForm: FormGroup;
  product: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ps: ProductsService, private fb: FormBuilder) {
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

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ps.editProduct(params.id).subscribe(res => {
          this.product = res;
      });
    });
  }

  updateProduct(Barcode,ProductCategory,Name,Distributor,GST,MRP,ExpiryDate) {
    this.route.params.subscribe(params => {
      this.ps.updateProduct(Barcode,ProductCategory,Name,Distributor,GST,MRP,ExpiryDate,params.id);
      this.router.navigate(['products']);
    });
  }
}
