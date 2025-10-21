import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CarouselService } from './carousel.service';
import { firstValueFrom } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

export const carouselGuard: CanActivateFn = async () => {
  const router = inject(Router);
  const carouselService = inject(CarouselService);
  const toastr = inject(ToastrService);
  const slides = await firstValueFrom(carouselService.getSlides());

  if (slides.length === 0) {
    console.log("there isn't any data");
    toastr.error('داده ای برای نمایش وجود ندارد');
    setTimeout(() => router.navigate(['/']), 5000);
    return false;
  }

  return true;
};
