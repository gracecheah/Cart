import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovesetInfoComponent } from './moveset-info.component';

describe('MovesetInfoComponent', () => {
  let component: MovesetInfoComponent;
  let fixture: ComponentFixture<MovesetInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovesetInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovesetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
