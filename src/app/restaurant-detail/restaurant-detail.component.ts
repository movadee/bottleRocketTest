import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppLoadService } from '../app-load.service';
import { IRestaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {
  public restaurant: IRestaurant;

  constructor(private route: ActivatedRoute, private appLoadService: AppLoadService) { }

  ngOnInit() {
    this.getRestaurantDetail();
  }

  getRestaurantDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.restaurant = this.appLoadService.getRestaurantsDetail(id);
  }

}
