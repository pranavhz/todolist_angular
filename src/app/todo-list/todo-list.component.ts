import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoModel } from '../../models/todo-model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  @Input() todos: Array<TodoModel> = [];

  @Output() onEditFn = new EventEmitter<TodoModel>();
  @Output() onDeleteFn = new EventEmitter<number>();

  constructor() {
    console.log(this.todos, 'TodoList');
  }

  onEdit(todo: TodoModel) {
    this.onEditFn.emit(todo);
  }

  onDelete(todo: TodoModel) {
    this.onDeleteFn.emit(todo.srno);
  }
}
