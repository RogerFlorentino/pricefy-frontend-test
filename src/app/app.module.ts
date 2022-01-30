import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgxSpinnerModule } from 'ngx-spinner';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RootStoreModule } from './root-store';
import { ConfigLoaderService } from './services/config-loader.service';
import { RootStoreFacade } from './facade/root-store.facade';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	NgbModule,
    NgbDropdownModule,
	NgxSpinnerModule,
	HttpClientModule,
	RootStoreModule,
	StoreDevtoolsModule.instrument({
		maxAge: 25,
		logOnly: environment.production,
	})
  ],
  providers: [
    {
			provide: APP_INITIALIZER,
			useFactory: (configService: ConfigLoaderService) => () => configService.loadConfig(),
			deps: [ConfigLoaderService],
			multi: true
		},
		ConfigLoaderService,
		RootStoreFacade
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
