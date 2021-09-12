import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReincarnationComponent } from './reincarnation.component';

describe('ReincarnationComponent', () => {
  let component: ReincarnationComponent;
  let fixture: ComponentFixture<ReincarnationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReincarnationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReincarnationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
