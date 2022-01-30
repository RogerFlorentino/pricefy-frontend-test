import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { ShowLoading, HideLoading} from './actions';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class RootStoreEffects {

	showLoading$ = createEffect(() => this.actions$.pipe(
		ofType(ShowLoading),
		tap(() => this.spinner.show())
	), { dispatch: false });

	hideLoading$ = createEffect(() => this.actions$.pipe(
		ofType(HideLoading),
		tap(() => this.spinner.hide())
	), { dispatch: false });

	constructor(
		private actions$: Actions,
		private spinner: NgxSpinnerService
	) { }
}