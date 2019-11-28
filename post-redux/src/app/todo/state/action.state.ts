import { createAction } from '@ngrx/store';
import { Todo } from '../data/todo';

export const addTodo = createAction('[Todo List] Add Todo', (todo: Todo) => ({ todo }));
export const doneTodo = createAction('[Todo List] Toggle Todo Status', (index: number, done: boolean) => ({ index, done }));
export const removeTodo = createAction('[Todo List] Remove Todo', (index: number) => ({ index }));