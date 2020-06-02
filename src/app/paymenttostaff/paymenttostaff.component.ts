import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Staff from '../Staff';
import { StaffsService } from '../staffs.service';

import * as XLSX from 'xlsx';
const { read, write, utils } = XLSX;

@Component({
  selector: 'app-paymenttostaff',
  templateUrl: './paymenttostaff.component.html',
  styleUrls: ['./paymenttostaff.component.css']
})
export class PaymenttostaffComponent implements OnInit {
  staffs: Staff[];
  name = 'Attendence Sheet';
  angForm: FormGroup;
  
  constructor(private fb: FormBuilder,private ps: StaffsService) { 
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      StaffName: ['' ]
     

    });
  }

  ngOnInit(){
    this.ps
    .getstaffs()
    .subscribe((data: Staff[]) => {
      this.staffs = data;
  });
  }
  

}
