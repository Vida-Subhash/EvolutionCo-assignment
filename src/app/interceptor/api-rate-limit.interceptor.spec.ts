import { TestBed } from '@angular/core/testing';

import { ApiRateLimitInterceptor } from './api-rate-limit.interceptor';

describe('ApiRateLimitInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiRateLimitInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiRateLimitInterceptor = TestBed.inject(ApiRateLimitInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
