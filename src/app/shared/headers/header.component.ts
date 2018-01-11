import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../restaurant/restaurant';
import { User } from '../../admin/users';
import { RestaurantService } from '../../restaurant/restaurant-service';
import { UserService } from '../../admin/users';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'barlink-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [RestaurantService, UserService]
})
export class HeaderComponent implements OnInit{

  restaurant: Restaurant;
  user = new User;

  constructor(private restaurantService: RestaurantService,
              private userService: UserService,
              private translate: TranslateService) { }


  ngOnInit(): void {
    this.restaurantService.getRestaurant().then(res => {
      this.restaurant = res
    });
    this.userService.getUser().subscribe(data => {
      this.user.name = data.name;
      this.user.job = data.bio;
      console.log(this.user)
    },
    err => {
      console.log(err)
    })
  }

  changeLang(language: string) {
        this.translate.use(language);
    }
}
