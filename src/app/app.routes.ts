import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { TodolistComponent } from './home/todolist/todolist.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'todolist', component: TodolistComponent },
];
