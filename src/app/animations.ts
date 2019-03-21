import { trigger, style, animate, transition, query, animateChild, group } from '@angular/animations';

// TODO: touch base with designers on animation specifics
export const slideInAnimation =
  trigger('routeAnimations', [
    transition('RestaurantListPage <=> RestaurantDetailPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ right: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ right: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ right: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
