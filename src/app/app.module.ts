import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLoadService } from './app-load.service';

export function get_restaurants(appLoadService: AppLoadService) {
  return () => appLoadService.getRestaurants();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AppLoadService,
    { provide: APP_INITIALIZER, useFactory: get_restaurants, deps: [AppLoadService], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
