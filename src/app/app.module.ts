import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { StudentserviceService }   from './studentservice.service';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateStudentacctComponent } from './create-studentacct/create-studentacct.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { StprofileComponent } from './stprofile/stprofile.component';
import { ClassesComponent } from './classes/classes.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AssignmentCreatedComponent } from './assignment-created/assignment-created.component';
import { ResourcesCreatedComponent } from './resources-created/resources-created.component';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentacctComponent,
    StudentprofileComponent,
    StprofileComponent,
    ClassesComponent,
    AssignmentsComponent,
    AssignmentCreatedComponent,
    ResourcesCreatedComponent,
    CreateAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule      
  ],
  providers: [StudentserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
