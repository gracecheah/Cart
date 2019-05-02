import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikePieChartComponent } from './like-pie-chart.component';

describe('LikePieChartComponent', () => {
  let component: LikePieChartComponent;
  let fixture: ComponentFixture<LikePieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikePieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
