import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CarouselService } from './carousel.service';
import { firstValueFrom } from 'rxjs';

export const carouselGuard: CanActivateFn = async () => {
  const router = inject(Router);
  const carouselService = inject(CarouselService);

  const slides = await firstValueFrom(carouselService.getSlides());

  if (slides.length === 0) {
    console.log("there isn't any data");
    router.navigate(['/']);
    return false;
  }

  return true;
};
