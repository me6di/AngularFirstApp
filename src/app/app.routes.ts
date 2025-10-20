import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { carouselGuard } from './home/carousel/models/services/carousel.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'carousel',
    loadComponent: () =>
      import('./home/carousel/carousel.component').then(
        (c) => c.CarouselComponent
      ),
    canActivate: [carouselGuard],
  },
  {
    path: 'todolist',
    loadComponent: () =>
      import('./home/todolist/todolist.component').then(
        (t) => t.TodolistComponent
      ),
  },
];
