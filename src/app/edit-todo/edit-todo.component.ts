import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Todo } from '../shared/Todo.model';
import { TodoService } from '../shared/todo.service';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';


@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent {
  @ViewChild('value') valueInput!: ElementRef;
  @Input() task!: Todo;

  constructor(private todoSrv: TodoService) {}

  addTodo() {
    const taskToUpdate = this.todoSrv.TodoList.find(todo => todo.id === this.task.id);
    if (taskToUpdate) {
      taskToUpdate.description = this.valueInput.nativeElement.value;
      taskToUpdate.isEditing = false
    }
    console.log('called')
  }
}
