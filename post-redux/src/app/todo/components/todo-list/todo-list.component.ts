import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../data/todo';
import * as fromTodo from '../../state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  $todos: Observable<Todo[]>;
  constructor(private store: Store<fromTodo.TodoState>) { }

  ngOnInit() {
    this.$todos = this.store.select(fromTodo.getTodos);
  }

  addTodo(name: string) {
   this.store.dispatch(fromTodo.addTodo(new Todo(name)));
  }

  removeTodo(index: number) {
    this.store.dispatch(fromTodo.removeTodo(index));
  }

  doneTodo(index: number, done: boolean) {
    this.store.dispatch(fromTodo.doneTodo(index, done));
  }
}
