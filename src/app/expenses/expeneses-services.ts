import { Injectable }     from '@angular/core';
import { DataTableParams } from 'angular-4-data-table';
import 'rxjs/add/operator/toPromise';

function paramsToQueryString(params: DataTableParams) {
    let result = [];

    if (params.offset != null) {
        result.push(['_start', params.offset]);
    }
    if (params.limit != null) {
        result.push(['_limit', params.limit]);
    }
    if (params.sortBy != null) {
        result.push(['_sort', params.sortBy]);
    }
    if (params.sortAsc != null) {
        result.push(['_order', params.sortAsc ? 'ASC' : 'DESC']);
    }

    return result.map(param => param.join('=')).join('&');
}


@Injectable()
export class ExpensesService {

  getExpenses(): Promise<Any[]> {
    return Promise.resolve(HEROES);
  }
    query(params: DataTableParams) {
        return this.http.get(BASE_URL + '/people?' + paramsToQueryString(params)).toPromise()
            .then((resp: Response) => ({
                items: resp.json(),
                count: Number(resp.headers.get('X-Total-Count'))
            }));
    }
}
