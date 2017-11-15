import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../restaurant/restaurant';
import { RestaurantService } from '../../restaurant/restaurant-service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'barlink-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [RestaurantService]
})
export class HeaderComponent implements OnInit{

  restaurant: Restaurant;

  constructor(private restaurantService: RestaurantService, private translate: TranslateService) { }


  ngOnInit(): void {
    this.restaurantService.getRestaurant().then(res => {
      this.restaurant = res
    });
  }

  changeLang(language: string) {
        this.translate.use(language);
    }
}
