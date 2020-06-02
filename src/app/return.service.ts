import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReturnService {

  uri = 'http://localhost:4000/return';

  constructor(private http: HttpClient) { }

  addreturn(Barcode,ProductName,City,State,PostalCode,Country,Name,Email,Reason)
   {  console.log(Barcode,ProductName,City,State,PostalCode,Country,Name,Email,Reason);
    const obj = {
        Barcode,
        ProductName,
        City,
        State,
        PostalCode,
        Country,
        Name,
        Email,
        
        Reason
    
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

 /* getstaffs() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editStaff(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateStaff(StaffName,Email,ContactNo,State,DOB, id) {
    const obj = {
        StaffName,
        Email,
        ContactNo,
        State,
        DOB
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deleteStaff(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }*/
}
