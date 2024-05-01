import { Component } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  constructor(private todoSrv:TodoService){

  }
  description = '';
  addTodo(){
    if (this.description) {
      this.todoSrv.addItem(this.description);

      this.description = '';
      console.log('added 1 ')
    }

  }
}
