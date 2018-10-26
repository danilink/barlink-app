import { Injectable }     from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Food } from './food';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private API_URL  = environment.api_url + '/food'

    constructor (public http: HttpClient) {}

    allFood(): Observable<Food[]> {
      return this.http.get<Food[]>(this.API_URL);
    }

    create(food: Food): Observable<Food> {
      return this.http.post(this.API_URL, food)
    }
}
