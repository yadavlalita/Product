import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  uri = 'http://localhost:4000/purchases';


  constructor(private http: HttpClient) { }

  addPurchase(Distributor,Credit_Cash,Bill_ChallanDate,Bill_ChallanNo,Barcode,MRP,Qty,Amount)
   {  console.log(Distributor,Credit_Cash,Bill_ChallanDate,Bill_ChallanNo,Barcode,MRP,Qty,Amount)
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

  getPurchases() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editPurchase(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updatePurchase(Distributor,Credit_Cash,Bill_ChallanDate,Bill_ChallanNo,Barcode,MRP,Qty,Amount,id) {
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

  deletePurchase(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }


  
}
