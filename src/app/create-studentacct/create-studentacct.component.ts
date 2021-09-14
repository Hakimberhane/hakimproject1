import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { StudentserviceService }   from '../studentservice.service';
import { ClassinfoService }   from '../classinfo.service';




@Component({
  selector: 'app-create-studentacct',
  templateUrl: './create-studentacct.component.html',
  styleUrls: ['./create-studentacct.component.css']
})
export class CreateStudentacctComponent implements OnInit {

  student:any;
  stNo ;

  constructor(private router: Router,private _studentservice: StudentserviceService,
  private _classinfo:ClassinfoService) {



  }

  ngOnInit(){
  }


  register(data){


    let studentMap = new Map();
      this.stNo = this._studentservice.students.length;

    this.student  = {        
        studentNo:this.stNo,
        firstName:data.value.firstName,
        lastName:data.value.lastName,
        gender:data.value.gender,
        email:data.value.email,
        address:data.value.address,
        phone:data.value.phone,
        grade:data.value.grade,
    }
    
      this._studentservice.addStudentinfo(this.student);

      this._studentservice.addStudentMap(this.stNo,this.student);

      this.router.navigate(['/studentprofile']);

  }


  }           

