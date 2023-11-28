import { TestBed } from '@angular/core/testing';

import { GenralService } from './genral.service';

describe('GenralService', () => {
  let service: GenralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
