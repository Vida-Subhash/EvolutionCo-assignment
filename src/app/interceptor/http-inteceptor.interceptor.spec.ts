import { TestBed } from '@angular/core/testing';

import { HttpInteceptorInterceptor } from './http-inteceptor.interceptor';

describe('HttpInteceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpInteceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpInteceptorInterceptor = TestBed.inject(HttpInteceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
