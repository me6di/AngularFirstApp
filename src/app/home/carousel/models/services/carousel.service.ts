import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISlides } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  private http = inject(HttpClient);
  private apiUrl = 'https://68f61ed66b852b1d6f161b9e.mockapi.io/carousel';

  getSlides(): Observable<ISlides[]> {
    return this.http.get<ISlides[]>(this.apiUrl);
  }
}
