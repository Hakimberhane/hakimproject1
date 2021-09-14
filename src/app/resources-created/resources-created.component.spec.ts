import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesCreatedComponent } from './resources-created.component';

describe('ResourcesCreatedComponent', () => {
  let component: ResourcesCreatedComponent;
  let fixture: ComponentFixture<ResourcesCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesCreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
