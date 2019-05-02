import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagestagComponent } from './imagestag.component';

describe('ImagestagComponent', () => {
  let component: ImagestagComponent;
  let fixture: ComponentFixture<ImagestagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagestagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagestagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
