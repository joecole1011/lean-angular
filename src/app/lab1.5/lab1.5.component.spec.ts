import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab1.5Component } from './lab1.5.component';

describe('Lab1.5Component', () => {
  let component: Lab1.5Component;
  let fixture: ComponentFixture<Lab1.5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab1.5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab1.5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
