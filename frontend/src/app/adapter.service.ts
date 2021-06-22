import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Entry, Price} from "./models";
import {map} from "rxjs/operators";


@Injectable({providedIn: 'root'})
export class AdapterService {

  constructor(private http: HttpClient) {
  }

  /*
  GET /price?distance=2

  {
    "price": 4
  }
   */

  priceForDistance(distance: number): Observable<number> {
    return this.http.get<Price>('/api/calculate', {params: {distance: distance}})
      .pipe(
        map(price => price.price)
      )

  }

  createAccount(entry: Entry): Observable<Entry> {
    return this.http.post<Entry>('/api/sign-up', entry);
  }

}

