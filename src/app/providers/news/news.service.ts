import { Observable} from 'rxjs';
import { map } from "rxjs/operators";
import { Constants, NEWS } from './../../service-constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  products: any;
  constructor(private http: HttpClient) { }

  getNewsList(): Observable<any> {
    return this.http.get(NEWS.BASE_URL + Constants.NEWS_LIST+'?apiKey=' + NEWS.API_KEY + '&sources=' + Constants.SOURCES);
  }  

}
