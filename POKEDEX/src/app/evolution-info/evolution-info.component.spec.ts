import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionInfoComponent } from './evolution-info.component';

describe('EvolutionInfoComponent', () => {
  let component: EvolutionInfoComponent;
  let fixture: ComponentFixture<EvolutionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolutionInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
