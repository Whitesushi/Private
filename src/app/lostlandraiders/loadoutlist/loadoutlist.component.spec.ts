import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadoutlistComponent } from './loadoutlist.component';

describe('LoadoutlistComponent', () => {
  let component: LoadoutlistComponent;
  let fixture: ComponentFixture<LoadoutlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadoutlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadoutlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
