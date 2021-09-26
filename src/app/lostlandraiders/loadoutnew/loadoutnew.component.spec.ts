import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadoutnewComponent } from './loadoutnew.component';

describe('LoadoutnewComponent', () => {
  let component: LoadoutnewComponent;
  let fixture: ComponentFixture<LoadoutnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadoutnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadoutnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
