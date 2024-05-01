import { Component, Input, OnInit } from '@angular/core';
import {  faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../shared/Todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{
  faEdit = faEdit;
  faTrash = faTrash;
  @Input() task!:Todo;
  constructor(private todoSrv:TodoService){
  }
  ngOnInit(): void {

  }
  onEdit(){
    const todoToUpdate = this.todoSrv.TodoList.find(todo => todo.id === this.task.id);

    if (todoToUpdate !== undefined) {
      todoToUpdate.isEditing = true;
    } 
  console.log('is called')
  }
  Ondelete(){
    this.todoSrv.deleteItem(this.task.id)
  }
}
