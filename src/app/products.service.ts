import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = 'http://localhost:4000/products';


  constructor(private http: HttpClient) { }

  addProduct(Barcode,ProductCategory,Name,Distributor,GST,MRP,ExpiryDate)
   {  console.log(Barcode,ProductCategory,Name,Distributor,GST,MRP,ExpiryDate)
    const obj = {
      Barcode,
      ProductCategory,
      Name,
      Distributor,
      GST,
      MRP,
      ExpiryDate
     
    
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getProducts() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editProduct(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateProduct(Barcode,ProductCategory,Name,Distributor,GST,MRP,ExpiryDate,id) {
    const obj = {
      Barcode,
      ProductCategory,
      Name,
      Distributor,
      GST,
      MRP,
      ExpiryDate
      
   
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deleteProduct(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }


  
}
