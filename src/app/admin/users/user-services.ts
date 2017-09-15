import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';


const BASE_URL = 'http://localhost:3000';

@Injectable()
export class RemoteService {

    constructor (private http: Http) {}

    query(params: DataTableParams) {
        return this.http.get(BASE_URL).toPromise()
            .then((resp: Response) => ({
                items: resp.json(),
                count: Number(resp.headers.get('X-Total-Count'))
            }));
    }
}
