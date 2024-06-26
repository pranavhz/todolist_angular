import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoModel } from '../models/todo-model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent, TodoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  todoList: Array<TodoModel> = [];

  currentTodo: TodoModel = {
    task: '',
  };

  constructor(private todoService: TodoService) {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodo().subscribe({
      next: (response) => {
        if (response.data) {
          this.todoList = response.data;
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onEdit(todo: TodoModel) {
    this.currentTodo = todo;
  }

  onDelete(id: number) {
    this.todoService.deleteTodo(id).subscribe({
      next: (response) => {
        if (response.message === 'Success') {
          this.getTodos();
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onSubmit(todo: TodoModel) {
    console.log(todo);
    if (todo.srno) {
      // edit

      this.todoService.editTodo(todo).subscribe({
        next: (response) => {
          if (response.message === 'Success') {
            this.getTodos();
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      // create
      this.todoService.createTodo(todo.task).subscribe({
        next: (response) => {
          if (response.message === 'Success') {
            this.getTodos();
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
