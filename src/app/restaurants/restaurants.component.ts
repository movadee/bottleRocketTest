import { Component, OnInit } from '@angular/core';
import { AppLoadService } from '../app-load.service';
import { IRestaurant } from '../restaurant';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  // TODO: unit tests
  public restaurants: IRestaurant[];

  constructor(private appLoadService: AppLoadService) { }

  ngOnInit() {
    this.getRestaurantsList();
    this.hideBackBtn();
  }

  getRestaurantsList(): void {
    this.restaurants = this.appLoadService.getRestaurantsList();
  }

  // HACK: temp solution. Need to find a better way to show/hide back btn
  hideBackBtn() {
    const backBtn = document.getElementById('backBtn');
    backBtn.setAttribute('style', 'display: none');
  }

}
