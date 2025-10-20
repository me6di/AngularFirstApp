import { Component } from '@angular/core';
import { ISlides } from '../slides';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css',
})
export class BoxComponent {
  slidesInfo: ISlides[] = [
    { id: 1, name: 'slide-1', url: '/photo_1.jpg' },
    { id: 2, name: 'slide-2', url: '/photo_2.jpg' },
    { id: 3, name: 'slide-3', url: '/photo_3.jpg' },
    { id: 4, name: 'slide-4', url: '/photo_4.jpg' },
    { id: 5, name: 'slide-5', url: '/photo_5.jpg' },
  ];

  i: number = 0;
  defaultUrl = this.slidesInfo[this.i].url;
  defaultName = this.slidesInfo[this.i].name;

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
