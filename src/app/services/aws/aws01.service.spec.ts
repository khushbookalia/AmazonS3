import { TestBed, inject } from '@angular/core/testing';

import { Aws01Service } from './aws01.service';

describe('Aws01Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Aws01Service]
    });
  });

  it('should be created', inject([Aws01Service], (service: Aws01Service) => {
    expect(service).toBeTruthy();
  }));
});
