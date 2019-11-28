import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../data/todo';

var nextId = 0;
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() remove = new EventEmitter();
  @Output() done = new EventEmitter<boolean>();

  id = `todo-item-${nextId++}`;
  
 
  constructor() { }

  ngOnInit() {
  }

}
