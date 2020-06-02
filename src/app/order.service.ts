import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  uri = 'http://localhost:4000/orders';

  constructor(private http: HttpClient) { }

  addorder(Name,Email,ContactNo,Address,City,State,Country,ShippingAddress,Products,Qty,Payment)
   {  console.log(Name,Email,ContactNo,Address,City,State,Country,ShippingAddress,Products,Qty,Payment);
    const obj = {
        Name,
    Email,
    ContactNo,
    Address,
    City,
    State,
    Country,
    ShippingAddress,
    Products,
    Qty,
    Payment

    
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getorder() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editorder(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateorder(Name,Email,ContactNo,Address,City,State,Country,ShippingAddress,Products,Qty,Payment, id) {
    const obj = {
        Name,
    Email,
    ContactNo,
    Address,
    City,
    State,
    Country,
    ShippingAddress,
    Products,
    Qty,
    Payment
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deleteorder(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
