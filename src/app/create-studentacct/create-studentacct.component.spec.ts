import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentacctComponent } from './create-studentacct.component';

describe('CreateStudentacctComponent', () => {
  let component: CreateStudentacctComponent;
  let fixture: ComponentFixture<CreateStudentacctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStudentacctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStudentacctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
