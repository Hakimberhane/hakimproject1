import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-assignment-created',
  templateUrl: './assignment-created.component.html',
  styleUrls: ['./assignment-created.component.css']
})
export class AssignmentCreatedComponent implements OnInit {

  constructor(private router: Router, private activatedroute: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  
  createAssignment(){
      this.router.navigate(['/createAsignment']);
  }
}
