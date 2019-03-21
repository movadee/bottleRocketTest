import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { RestaurantsComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { environment } from 'src/environments/environment.prod';

/**
 * App_initializer is used to get a list of restaurants from the server
 * before application is loaded. This way, app will have initial data on load
 * and user will have a flawless experience.
 */
export function get_restaurants(appService: AppService) {
  return () => appService.getRestaurants();
}

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    RestaurantDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    })
  ],
  providers: [
    AppService,
    { provide: APP_INITIALIZER, useFactory: get_restaurants, deps: [AppService], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
