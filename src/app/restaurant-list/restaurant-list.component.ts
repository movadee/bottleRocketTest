import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { IRestaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
})
export class RestaurantsComponent implements OnInit {
  restaurants: IRestaurant[];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getRestaurantList();
    this.hideBackBtn();
  }

  getRestaurantList(): void {
    this.restaurants = this.appService.getRestaurantList();
  }

  // TODO: this is a temp solution. Need to find a better way to show/hide back btn
  hideBackBtn(): void {
    const backBtn = document.getElementById('backBtn');
    backBtn.setAttribute('style', 'display: none');
  }

}
