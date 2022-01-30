import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, firstValueFrom } from 'rxjs';

interface Configuration {
	apiUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigLoaderService {

  private config!: Configuration;
  
	constructor(private http: HttpClient) { }
  
	public loadConfig() {
	  return firstValueFrom(this.http.get<Configuration>('assets/config/config.json').pipe(
      tap(env => {
        this.config = env;
      })
      ));
	}
  
	public get configuration(): Configuration {
	  return this.config;
	}
  
	public get apiUrl(): string {
	  return this.config.apiUrl;
	}
}
