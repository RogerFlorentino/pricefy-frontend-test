import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RootStoreEffects } from './effects';
import { rootReducer } from './reducer';



@NgModule({
  declarations: [],
  imports: [
	CommonModule,
	StoreModule.forRoot(rootReducer),
	StoreModule.forFeature('root',rootReducer),
	EffectsModule.forRoot([RootStoreEffects])
  ]
})
export class RootStoreModule { }
