import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoShellComponent } from './shells/todo-shell/todo-shell.component';
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './state';

@NgModule({
  declarations: [TodoItemComponent, TodoListComponent, TodoShellComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    StoreModule.forFeature(fromTodo.featureName, fromTodo.reducer)
  ]
})
export class TodoModule { }
