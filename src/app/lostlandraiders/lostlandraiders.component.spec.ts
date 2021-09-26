import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostlandraidersComponent } from './lostlandraiders.component';

describe('LostlandraidersComponent', () => {
  let component: LostlandraidersComponent;
  let fixture: ComponentFixture<LostlandraidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostlandraidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LostlandraidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
