import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';
import { TodoState } from './reducer.state';

export const featureName = "todo";
export interface State extends fromRoot.State {
    todo: TodoState
}
export * from './action.state';
export * from './reducer.state';


const featureSelector = createFeatureSelector<TodoState>(featureName);

export const getTodos = createSelector(
    featureSelector,
    state => state.todos
)

export const getDoneCount = createSelector(
    featureSelector,
    state => state.todos.filter(q => q.done).length
)