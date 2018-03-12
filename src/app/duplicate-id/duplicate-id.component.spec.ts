import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateIdComponent } from './duplicate-id.component';

describe('DuplicateIdComponent', () => {
  let component: DuplicateIdComponent;
  let fixture: ComponentFixture<DuplicateIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicateIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
