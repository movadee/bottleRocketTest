import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  animations: [
    slideInAnimation
    // animation triggers go here
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {}

  // TODO: unit tests
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  goToRestaurantListPage() {
    this.router.navigate(['/restaurants']);
  }
}
