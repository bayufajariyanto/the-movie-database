import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as TmdbConstants from 'src/app/core/constants/tmdb.constant';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  apiUrl = TmdbConstants.TMDB_URL

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TmdbConstants.TMDB_TOKEN}`
  })

  constructor(private http: HttpClient) { }

  getData(endpoint: String): Promise<any> {
    return this.http.get<any>(`${this.apiUrl}${endpoint}`, { headers: this.headers }).toPromise();
  }
}
