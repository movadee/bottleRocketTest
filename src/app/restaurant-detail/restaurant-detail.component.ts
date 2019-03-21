import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { IRestaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: IRestaurant;

  constructor(private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit() {
    this.getRestaurantDetail();
    this.showBackBtn();
  }

  getRestaurantDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.restaurant = this.appService.getRestaurantDetail(id);
  }

  // TODO: this is a temp solution. Need to find a better way to show/hide back btn
  showBackBtn(): void {
    const backBtn = document.getElementById('backBtn');
    backBtn.setAttribute('style', 'display: inline-block');
  }

}
