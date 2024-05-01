import { Component } from '@angular/core';
import { Todo } from './shared/Todo.model';
import { TodoService } from './shared/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
  todoList:Todo[] = [];
  constructor(private todoSrv:TodoService){
  }
  ngOnInit(): void {
    this.todoList = this.todoSrv.TodoList;

  }


}
