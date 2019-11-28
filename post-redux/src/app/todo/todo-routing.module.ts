import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoShellComponent } from './shells/todo-shell/todo-shell.component';


const routes: Routes = [
  { path: '', component: TodoShellComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
