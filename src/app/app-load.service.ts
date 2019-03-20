import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRestaurant } from './restaurant';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppLoadService {
  public restaurants: IRestaurant[];
  private restaurantsUrl = environment.restaurantsUrl;

  constructor(private http: HttpClient) { }

  getRestaurants (): Promise<IRestaurant[]> {
    const promise = this.http.get<IRestaurant[]>(this.restaurantsUrl)
      .toPromise()
      .then(restaurants => {
        console.log(`LOADING: `);
        this.restaurants = restaurants;
        return restaurants;
      });
    return promise;
  }
}
