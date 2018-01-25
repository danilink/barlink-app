import { Injectable }     from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Expense } from './expense';
import 'rxjs/add/operator/catch';

@Injectable()
export class ExpenseService {

    private API_URL  = environment.api_url + '/expense'

    constructor (public http: HttpClient) {}

    getExpenses(): Observable<Expense[]> {
      return this.http.get<Expense[]>(this.API_URL);
    }

    private handleError(error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server   error';
      console.error(errMsg);
      return Observable.throw(errMsg);
    }

}
