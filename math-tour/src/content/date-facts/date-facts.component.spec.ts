/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DateFactsComponent } from './date-facts.component';

describe('DateFactsComponent', () => {
  let component: DateFactsComponent;
  let fixture: ComponentFixture<DateFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateFactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
