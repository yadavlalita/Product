import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  uri = 'http://localhost:4000/accounts';

  constructor(private http: HttpClient) { }

  addacc(AccountName,Type,Address,ContactPerson,ContactNumber,GST_Tin_no,Balance)
   {  console.log(AccountName,Type,Address,ContactPerson,ContactNumber,GST_Tin_no,Balance);
    const obj = {
        AccountName,
        Type,
        Address,
        ContactPerson,
        ContactNumber,
        GST_Tin_no,
        Balance
        
    
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getaccs() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editacc(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateacc(AccountName,Type,Address,ContactPerson,ContactNumber,GST_Tin_no,Balance, id) {
    const obj = {
        AccountName,
        Type,
        Address,
        ContactPerson,
        ContactNumber,
        GST_Tin_no,
        Balance
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deleteacc(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
