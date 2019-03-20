import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRestaurant } from './restaurant';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppLoadService {
  // TODO: unit tests
  private restaurants: IRestaurant[];
  private restaurantsUrl = environment.restaurantsUrl;

  constructor(private http: HttpClient) { }

  public getRestaurantsList(): IRestaurant[] {
    return this.restaurants;
  }

  /**
   * Due to not having a unique ID assigned to a restaurant
   * I am finding restaurants based on a name
   * TODO: confirm what to use for as a unique ID of the restaurant
   */
  public getRestaurantsDetail(id: string): IRestaurant {
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
