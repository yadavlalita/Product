import { Component, OnInit } from '@angular/core';
import Customer from '../Customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-get',
  templateUrl: './customer-get.component.html',
  styleUrls: ['./customer-get.component.css']
})
export class CustomerGetComponent implements OnInit {
  customers: Customer[];
  constructor(private ps: CustomersService) { }

  ngOnInit() {
    this.ps
    .getcustomers()
    .subscribe((data: Customer[]) => {
      this.customers = data;
  });
  }
  
  deleteCustomer(id) {
    this.ps.deleteCustomer(id).subscribe(res => {
      this.customers.splice(id, 1);
    });
  }

}
