import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSubsComponent } from './recent-subs.component';

describe('RecentSubsComponent', () => {
  let component: RecentSubsComponent;
  let fixture: ComponentFixture<RecentSubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentSubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
