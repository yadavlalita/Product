import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  uri = 'http://localhost:4000/payment';

  constructor(private http: HttpClient) { }

  addpayment(Challan_Bill,Distributors,Balance,Payments,BillStatus)
   {  console.log(Challan_Bill,Distributors,Balance,Payments,BillStatus);
    const obj = {
        Challan_Bill,
        Distributors,
        Balance,
        Payments,
        BillStatus

    
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getpayment() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editpayment(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updatepayment(Challan_Bill,Distributors,Balance,Payments,BillStatus, id) {
    const obj = {
        Challan_Bill,
        Distributors,
        Balance,
        Payments,
        BillStatus
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deletepayment(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
