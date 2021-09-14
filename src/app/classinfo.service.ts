import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassinfoService {

  classstudents =[];
  constructor() { }

  getClassinfo(){
  	return this.classstudents
  }

  addClassinfo(data) {
  	this.classstudents = data
  }
}
