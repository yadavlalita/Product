import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalereturnService {

  uri = 'http://localhost:4000/salereturns';

  constructor(private http: HttpClient) { }
 addsalereturn(BillNumber,Barcode,MRP,Qty)
 
   {  console.log(BillNumber,Barcode,MRP,Qty);
    const obj = {
        BillNumber,
        Barcode,
        MRP,
        Qty
        
    
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getsalereturns() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editsalereturn(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updatesalereturn(BillNumber,Barcode,MRP,Qty, id) {
    const obj = {
        BillNumber,
        Barcode,
        MRP,
        Qty
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deletesalereturn(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
