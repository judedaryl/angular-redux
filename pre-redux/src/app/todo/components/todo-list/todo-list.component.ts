import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../data/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  @Output() todosDone = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  addTodo(name: string) {
    this.todos.push(new Todo(name))
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
    this.updateCount();
  }

  doneTodo(index: number, done: boolean) {
    this.todos[index].done = done;
    this.updateCount();
  }

  updateCount() {
    const { length } = this.todos.filter(q => q.done);
    this.todosDone.emit(length);
  }
}
