import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeTimerComponent } from './cube-timer.component';

describe('CubeTimerComponent', () => {
  let component: CubeTimerComponent;
  let fixture: ComponentFixture<CubeTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubeTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
