import { Injectable } from '@angular/core';

import { Feed } from './feed';
import { FEED } from './mock-feeds';

@Injectable()
export class FeedService {

  getRestaurant(): Promise<Feed> {
    return Promise.resolve(FEED);
  }
}
