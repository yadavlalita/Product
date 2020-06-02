import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  uri = 'http://localhost:4000/users';

  constructor(private http: HttpClient) { }

  adduser(Distributor,Credit_Cash, Bill_ChallanDate,Bill_ChallanNo,Barcode,MRP,Qty,Amount)
   {  console.log(Distributor,Credit_Cash, Bill_ChallanDate,Bill_ChallanNo,Barcode,MRP,Qty,Amount);
    const obj = {
   
      Distributor,
      Credit_Cash,
      Bill_ChallanDate,
      Bill_ChallanNo,
      Barcode,
     MRP,
     Qty,
     Amount
    
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getusers() {
    return this
           .http
           .get(`${this.uri}`);
  }

  edituser(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateuser(Distributor,Credit_Cash, Bill_ChallanDate,Bill_ChallanNo,Barcode,MRP,Qty,Amount,id) {
    const obj = {
        
      Distributor,
      Credit_Cash,
      Bill_ChallanDate,
      Bill_ChallanNo,
      Barcode,
      MRP,
      Qty,
      Amount
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deleteuser(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
