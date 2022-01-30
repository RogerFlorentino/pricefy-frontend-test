import * as actions from './actions';
import { initialState, State } from './state';
import { Action, createReducer, on } from '@ngrx/store';

const reducer = createReducer(
    initialState
    // ------------------------------------------------------
    // Código exemplo de como criar um item no reducer
    //
    // on(actions.DefinirSaldo, (state, payload): State => {
    //     let newState: State = cloneDeep(state);
    //     return {
    //         ...newState,
    //         saldo: payload.saldo
    //     };
	// })
);

export function rootReducer(state: State | undefined, action: Action) {
    return reducer(state, action);
}