import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLoadService } from './app-load.service';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

/**
 * App_initializer is used to get a list of restaurants from the server
 * before application is loaded. This way, app will have initial data on load
 * and user will have a flawless experience.
 */
export function get_restaurants(appLoadService: AppLoadService) {
  return () => appLoadService.getRestaurants();
}

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    RestaurantDetailComponent
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
