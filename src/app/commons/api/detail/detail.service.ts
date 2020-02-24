import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

// types
import {Planet} from './types';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  url: 'https://swapi.co/api/people/1/';

  constructor(public httpClient: HttpClient) {

  }

  getPlanetInfo(planetUrl: string): Observable<Planet> {
    return this.httpClient.get(planetUrl, {
      headers: {
        'Content-Type': 'application/json'
      }
    }) as Observable<Planet>;
  }
}
