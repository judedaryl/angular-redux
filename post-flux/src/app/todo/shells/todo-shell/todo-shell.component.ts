import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTodo from '../../state';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-todo-shell',
  templateUrl: './todo-shell.component.html',
  styleUrls: ['./todo-shell.component.scss']
})
export class TodoShellComponent implements OnInit {
  $doneCount: Observable<number>;

  constructor(private store: Store<fromTodo.State>) { }

  ngOnInit() {
    this.$doneCount = this.store.select(fromTodo.getDoneCount);
  }

}
