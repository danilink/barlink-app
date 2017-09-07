import { Injectable } from '@angular/core';

import { Restaurant } from './restaurant';
import { RESTAURANT } from './mock-restaurant';

@Injectable()
export class RestaurantService {

  getRestaurant(): Promise<Restaurant> {
    return Promise.resolve(RESTAURANT);
  }
}
