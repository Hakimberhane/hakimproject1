import { Component, OnInit } from '@angular/core';
import { StudentserviceService }   from '../studentservice.service';


import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-stprofile',
  templateUrl: './stprofile.component.html',
  styleUrls: ['./stprofile.component.css']
})
export class StprofileComponent implements OnInit {
 
 id;
 students = [];
 myMap;
constructor(private _studentservice: StudentserviceService,private route: ActivatedRoute) {}

  ngOnInit(): void {

		this.route.params.subscribe(params => {
		       this.id = +params['id']; // (+) converts string 'id' to a number

		 //  const id = Number.parseInt(params['paramKey']);
        //const   id = this.route.snapshot.paramMap.get('id');
       // const id = this.route.snapshot.params['id'];
        // const param = this.route.snapshot.params['paramKey']; 
	    	console.log("my id");		
	 	   console.log("my id");
		   console.log(this.id);

		   this.myMap = this._studentservice.getStudentMap();

           this.students =    this.myMap.get(this.id);
           console.log(this.students);


		});
  }

}
