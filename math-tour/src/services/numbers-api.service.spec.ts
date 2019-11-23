/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NumbersApiService } from './numbers-api.service';

describe('Service: NumbersApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumbersApiService]
    });
  });

  it('should ...', inject([NumbersApiService], (service: NumbersApiService) => {
    expect(service).toBeTruthy();
  }));
});
