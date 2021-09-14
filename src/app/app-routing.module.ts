import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { CreateStudentacctComponent } from "./create-studentacct/create-studentacct.component";
import { StudentprofileComponent } from "./studentprofile/studentprofile.component";
import { StprofileComponent } from "./stprofile/stprofile.component";
import { ClassesComponent } from "./classes/classes.component";
import { AssignmentsComponent } from "./assignments/assignments.component";

import { AssignmentCreatedComponent } from "./assignment-created/assignment-created.component";
import { ResourcesCreatedComponent } from "./resources-created/resources-created.component";
import { CreateAssignmentComponent } from "./create-assignment/create-assignment.component"



const routes: Routes =  [{path: 'createstudentacct' , component:CreateStudentacctComponent},
                        { path: '',  redirectTo: '/createstudentacct', pathMatch: 'full' },
                        { path: 'studentprofile', component: StudentprofileComponent},

                        { path: 'assignmentCreated/:id', component: AssignmentCreatedComponent},
                        { path: 'resuourcesCreated/:id', component: ResourcesCreatedComponent},
                        { path: 'createAsignment', component: CreateAssignmentComponent},


                        { path: 'stprofile/:id', component: StprofileComponent,
                          children:[
                        { path: 'classes', component: ClassesComponent},
                        { path: 'assignments', component: AssignmentsComponent}
                          ]}
                        ]


@NgModule({
      imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
