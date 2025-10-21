import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ITodo } from './models/interfaces/todo';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {
  todoForm;
  tasks: ITodo[] = [];
  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      task: ['', Validators.required],
    });
  }

  addTask() {
    console.log('something added');
    const taskValue = this.todoForm.value.task?.trim();
    if (taskValue) {
      this.tasks.push({ title: taskValue, done: false });
      this.todoForm.reset();
    }
  }
  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
  toggleDone(task: { title: string; done: boolean }) {
    task.done = !task.done;
  }
}
