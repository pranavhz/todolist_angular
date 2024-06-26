import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoModel } from '../../models/todo-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  @Input() todo: TodoModel = {
    task: '',
  };

  @Output() onSubmitFn = new EventEmitter<TodoModel>();

  submitForm() {
    this.onSubmitFn.emit(this.todo);
    this.todo = { task: '' };
  }
}
