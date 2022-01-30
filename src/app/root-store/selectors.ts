import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './state';

export const selectRootState = createFeatureSelector<State>('root');
