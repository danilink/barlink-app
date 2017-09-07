import { Component, OnInit} from '@angular/core';
import {Restaurant} from '../../restaurant/restaurant';
import {RestaurantService} from '../../restaurant/restaurant-service';

@Component({
  selector: 'barlink-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [RestaurantService]
})
export class HeaderComponent implements OnInit{

  restaurant: Restaurant;

  constructor(private restaurantService: RestaurantService) { }


  ngOnInit(): void {
    this.restaurantService.getRestaurant().then(res => {
      this.restaurant = res
    });
  }

  toggleSidebar() {
          const dom: any = document.querySelector('body');
          dom.classList.toggle('push-right');
      }
}
