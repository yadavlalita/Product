import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffsService } from '../staffs.service';

@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})
export class StaffEditComponent implements OnInit {

  angForm: FormGroup;
  staff: any = {};
  constructor(private route: ActivatedRoute, private router: Router, private ps: StaffsService, private fb: FormBuilder) {
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
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.editStaff(params.id).subscribe(res => {
        this.staff = res;
    });
  });
  }


  updateStaff(StaffName, Email, ContactNo,State,DOB) {
    this.route.params.subscribe(params => {
      this.ps.updateStaff(StaffName, Email, ContactNo,State,DOB, params.id);
      this.router.navigate(['staffs']);
    });
  }
}
