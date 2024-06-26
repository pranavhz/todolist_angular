import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoModel } from '../models/todo-model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://127.0.0.1:1234';

  getTodo() {
    return this.http.get<{ data: Array<TodoModel>; message: string }>(
      `${this.baseUrl}/getTODO`
    );
  }

  createTodo(task: string) {
    return this.http.post<{ message: string }>(`${this.baseUrl}/postTODO`, {
      task,
    });
  }

  editTodo(todo: TodoModel) {
    console.log('Edit todo service', todo);
    return this.http.put<{ message: string }>(`${this.baseUrl}/updateTODO`, {
      srno: todo.srno,
      task: todo.task,
    });
  }

  deleteTodo(id: number) {
    return this.http.delete<{ message: string }>(
      `${this.baseUrl}/deleteTODO/${id}`
    );
  }
}
