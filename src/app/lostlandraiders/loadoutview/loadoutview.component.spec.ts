import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadoutviewComponent } from './loadoutview.component';

describe('LoadoutviewComponent', () => {
  let component: LoadoutviewComponent;
  let fixture: ComponentFixture<LoadoutviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadoutviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadoutviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
