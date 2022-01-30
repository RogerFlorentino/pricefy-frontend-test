import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
  SHOW_LOADING = '[Root Store] Show loading',
  HIDE_LOADING = '[Root Store] Hide loading'
}

export const ShowLoading = createAction(ActionTypes.SHOW_LOADING);
export const HideLoading = createAction(ActionTypes.HIDE_LOADING);