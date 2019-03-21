import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRestaurant } from './restaurant';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private restaurants: IRestaurant[];
  private restaurantsUrl = environment.restaurantsUrl;

  constructor(private http: HttpClient) {}

  getRestaurantList(): IRestaurant[] {
    return this.restaurants;
  }

  /**
   * TODO: Due to missing restaurant unique ID in json file
   * I am finding restaurants based on a name. Need to
   * confirm which key should be used as a restaurant unique identifier
   */
  getRestaurantDetail(id: string): IRestaurant {
    return this.restaurants.find(restaurant => restaurant.name === id);
  }

  getRestaurants(): Promise<any> {
    const promise = this.http.get<IRestaurant[]>(this.restaurantsUrl)
      .toPromise()
      .then(restaurants => {
        this.restaurants = restaurants['restaurants'];
        return restaurants;
      });
    return promise;
  }
}
