import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreshotsComponent } from './scoreshots.component';

describe('ScoreshotsComponent', () => {
  let component: ScoreshotsComponent;
  let fixture: ComponentFixture<ScoreshotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreshotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
