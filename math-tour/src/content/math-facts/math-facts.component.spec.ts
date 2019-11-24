/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MathFactsComponent } from './math-facts.component';

describe('MathFactsComponent', () => {
  let component: MathFactsComponent;
  let fixture: ComponentFixture<MathFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathFactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
