import { Store, select } from '@ngrx/store';
import * as actions from '../root-store/actions';
import { Injectable } from '@angular/core';
import { RootState } from '../root-store';

@Injectable({
    providedIn: 'root'
  })
export class RootStoreFacade {    
    constructor(private store: Store<RootState.State>){        
    }

    ShowLoading() {
        this.store.dispatch(actions.ShowLoading());
    }

    HideLoading() {
        this.store.dispatch(actions.HideLoading());
    }
}