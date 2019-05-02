import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineimagesComponent } from './lineimages.component';

describe('LineimagesComponent', () => {
  let component: LineimagesComponent;
  let fixture: ComponentFixture<LineimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
