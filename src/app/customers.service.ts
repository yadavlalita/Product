import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  uri = 'http://localhost:4000/customers';

  constructor(private http: HttpClient) { }

  addcustomer(FName,LName,MName,Email,ContactNo,Address,City,State,DOB,CreatedDate,UpdatedDate)
   { 
      console.log(FName,LName,MName,Email,ContactNo,Address,City,State,DOB,CreatedDate,UpdatedDate);
    const obj = {
      FName,
      LName,
      MName,
      Email,
      ContactNo,
      Address,
      City,
      State,
      DOB,
      CreatedDate,
      UpdatedDate
    
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getcustomers() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editCustomer(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateCustomer(FName,LName,MName,Email,ContactNo,Address,City,State,DOB,CreatedDate,UpdatedDate, id) {
    const obj = {
        FName,
        LName,
        MName,
        Email,
        ContactNo,
        Address,
        City,
        State,
        DOB,
        CreatedDate,
        UpdatedDate
      
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deleteCustomer(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
