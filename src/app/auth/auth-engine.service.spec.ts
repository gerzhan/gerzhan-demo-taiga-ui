import { TestBed } from '@angular/core/testing';

import { AuthEngineService } from './auth-engine.service';

describe('AuthEngineService', () => {
  let service: AuthEngineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthEngineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
