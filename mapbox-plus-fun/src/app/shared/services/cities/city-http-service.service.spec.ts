import { TestBed } from '@angular/core/testing';

import { CityHttpService } from './city-http-service.service';

describe('CityHttpServiceService', () => {
  let service: CityHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
