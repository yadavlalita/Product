import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StaffsService } from '../staffs.service';

@Component({
  selector: 'app-staff-add',
  templateUrl: './staff-add.component.html',
  styleUrls: ['./staff-add.component.css']
})
export class StaffAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: StaffsService) {
    this.createForm();
   }

   
  createForm() {
    this.angForm = this.fb.group({
      StaffName: ['', Validators.required ],
      Email: ['', Validators.required ],
      ContactNo: ['', Validators.required ],
      State: ['', Validators.required ],
      DOB: ['', Validators.required ],

    });
  }


  addstaff(StaffName,Email, ContactNo,State,DOB) {
    this.ps.addstaff(StaffName,Email, ContactNo,State,DOB);
  }

  ngOnInit() {
  }

}
