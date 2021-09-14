import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { StudentserviceService }   from '../studentservice.service';
import { ClassinfoService }   from '../classinfo.service';


@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentprofileComponent implements OnInit {

  students = [];
  
  constructor(private router: Router, private activatedroute: ActivatedRoute,private _studentservice: StudentserviceService,
  private _classinfo:ClassinfoService) {

  }

  ngOnInit(): void {

    this.students = this._studentservice.getStudentinfo();

  }
  createStudentClick(){
      this.router.navigate(['/createstudentacct']);
  }
 
}
