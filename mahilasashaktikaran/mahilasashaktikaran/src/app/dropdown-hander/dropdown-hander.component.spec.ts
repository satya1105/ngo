import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownHanderComponent } from './dropdown-hander.component';

describe('DropdownHanderComponent', () => {
  let component: DropdownHanderComponent;
  let fixture: ComponentFixture<DropdownHanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownHanderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownHanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
