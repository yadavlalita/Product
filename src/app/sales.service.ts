import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  uri = 'http://localhost:4000/sales';

  constructor(private http: HttpClient) { }

  addsale(Counter_Home,SaleDate,Category,Products,Amount)
   {  console.log(Counter_Home,SaleDate,Category,Products,Amount);
    const obj = {
        Counter_Home,
        SaleDate,
        Category,
        Products,
        Amount
    
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getsales() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editsale(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updatesale(Counter_Home,SaleDate,Category,Products,Amount, id) {
    const obj = {
        Counter_Home,
        SaleDate,
       Category,
       Products,
       Amount
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deletesale(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
