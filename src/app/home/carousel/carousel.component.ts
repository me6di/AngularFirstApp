import { Component, inject, OnInit } from '@angular/core';
import { ISlides } from './models/interfaces/interfaces';
import { RouterLink } from '@angular/router';
import { CarouselService } from './models/services/carousel.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent implements OnInit {
  private carouselService = inject(CarouselService);
  slidesInfo: ISlides[] = [];
  i = 0;
  defaultUrl = '';
  defaultName = '';
  ngOnInit() {
    this.carouselService.getSlides().subscribe({
      next: (data) => {
        this.slidesInfo = data;
        if (this.slidesInfo.length > 0) {
          this.defaultUrl = this.slidesInfo[this.i].url;
          this.defaultName = this.slidesInfo[this.i].name;
        }
      },
      error: (err) => console.error('Error fetching slides:', err),
    });
  }

  public next(): void {
    if (this.i == this.slidesInfo.length - 1) {
      this.i = 0;
      this.defaultUrl = this.slidesInfo[this.i].url;
      this.defaultName = this.slidesInfo[this.i].name;
    } else {
      this.i++;
      this.defaultUrl = this.slidesInfo[this.i].url;
      this.defaultName = this.slidesInfo[this.i].name;
    }
  }
  public previous(): void {
    if (this.i == 0) {
      this.i = this.slidesInfo.length - 1;
      this.defaultUrl = this.slidesInfo[this.i].url;
      this.defaultName = this.slidesInfo[this.i].name;
    } else {
      this.i--;
      this.defaultUrl = this.slidesInfo[this.i].url;
      this.defaultName = this.slidesInfo[this.i].name;
    }
  }
}
