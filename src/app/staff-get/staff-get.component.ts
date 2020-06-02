import { Component, OnInit } from '@angular/core';
import Staff from '../Staff';
import { StaffsService } from '../staffs.service';


@Component({
  selector: 'app-staff-get',
  templateUrl: './staff-get.component.html',
  styleUrls: ['./staff-get.component.css']
})
export class StaffGetComponent implements OnInit {
  staffs: Staff[];

  constructor(private ps: StaffsService) { }

  ngOnInit() {
    this.ps
    .getstaffs()
    .subscribe((data: Staff[]) => {
      this.staffs = data;
  });
  }


  deleteStaff(id) {
    this.ps.deleteStaff(id).subscribe(res => {
      this.staffs.splice(id, 1);
    });
  }
}
