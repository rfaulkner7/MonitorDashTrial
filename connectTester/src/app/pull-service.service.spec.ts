import { TestBed } from '@angular/core/testing';

import { PullServiceService } from './pull-service.service';

describe('PullServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PullServiceService = TestBed.get(PullServiceService);
    expect(service).toBeTruthy();
  });
});
