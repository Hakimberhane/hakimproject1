import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  students = [];
 stMap = new Map();

  constructor() { }

  getStudentinfo(){
  	return this.students;
  }

	getStudentMap(){
		 return this.stMap;
	}

		addStudentinfo(data) {
		this.students.push(data);
	 }
		addStudentMap(id, data){
		 	
		this.stMap.set(id,data);
     }
}
