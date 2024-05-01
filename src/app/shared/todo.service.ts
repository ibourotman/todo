import { Injectable } from '@angular/core';
import { Todo } from './Todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  TodoList:Todo[] = [new Todo(1,'go to gym'),new Todo(2,'reading 13 in table book'),new Todo(3,'preaparing food'),new Todo(4,'meeting friends')]
  constructor() { }
  addItem(description:string){
    this.TodoList.push(new Todo(this.TodoList.length + 1,description))
    console.log('added 2 ')

  }
  deleteItem(id: number) {
    const index = this.TodoList.findIndex(todo => todo.id === id);
    if (index !== -1) {
      this.TodoList.splice(index, 1);
      console.log(`Item with ID ${id} deleted`);
    } else {
      console.log(`Item with ID ${id} not found`);
    }
  }
}
