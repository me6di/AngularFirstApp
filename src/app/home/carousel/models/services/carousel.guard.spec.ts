import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { carouselGuard } from './carousel.guard';

describe('carouselGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => carouselGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
