import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxHandlerComponent } from './check-box-handler.component';

describe('CheckBoxHandlerComponent', () => {
  let component: CheckBoxHandlerComponent;
  let fixture: ComponentFixture<CheckBoxHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBoxHandlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckBoxHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
