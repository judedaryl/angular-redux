import {  createReducer, on, Action } from '@ngrx/store';
import { addTodo, doneTodo, removeTodo } from './action.state';
import { Todo } from '../data/todo';


export interface TodoState {
    todos: Todo[],
    doneCount: 0
}

let initialState: TodoState = {
    todos: [],
    doneCount: 0
}

const todoReducer = createReducer(initialState, 
    
    // Add a todo
    on(addTodo, (state: TodoState , { todo }) => ({
        ...state,
        todos: [...state.todos, todo]
    })),

    // Update todo
    on(doneTodo, (state: TodoState, { index, done }) => ({
        ...state,
        todos: state.todos.map((q, ix) => ix === index ? {...q, done} : q)
    })),

    // Remove todo
    on(removeTodo, (state: TodoState, { index }) => ({
        ...state,
        todos: state.todos.filter((_, ix) => ix !== index)
    }))
)

export function reducer(state: TodoState | undefined, action: Action) {
    return todoReducer(state, action);
}