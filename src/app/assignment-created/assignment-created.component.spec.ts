import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentCreatedComponent } from './assignment-created.component';

describe('AssignmentCreatedComponent', () => {
  let component: AssignmentCreatedComponent;
  let fixture: ComponentFixture<AssignmentCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentCreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
