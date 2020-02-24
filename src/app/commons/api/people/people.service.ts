import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

// rxjs
import {from, Observable} from 'rxjs';

import {
  catchError,
  map,
  mergeMap,
  switchMap,
  toArray,
} from 'rxjs/operators';

// types
import {Human, People, Planet} from './types';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  url = `https://swapi.co/api/people/`;

  constructor(public httpClient: HttpClient) {

  }

  getPeople(): Observable<Array<Human>> {
    return this.httpClient.get(this.url, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(
      mergeMap((event1: People) => {
        return this.httpClient.get(event1.next)
          .pipe(
            map((event2: People) => {
              return [...event1.results, ...event2.results];
            })
          );
      }),
      catchError(data => {
        return data;
      })
    ) as Observable<Array<Human>>;
  }

  getPerson(name: string): Observable<Human | any> {
    return this.httpClient.get(this.url, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(
      map((data: People) => data.results.find(item =>
        item.name === decodeURI(name)
      )),
      map((data) => {
        if (!data) {
          throw new Error('404');
        }
        return data;
      })
    ) as Observable<Human | Error>;
  }

  getPeopleByPlanet(planetUrl): Observable<Array<Human>> {
    return this.httpClient.get(planetUrl, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(
      switchMap((data: Planet) => {
        if (!data) {
          throw new Error('404');
        }
        return from(data.residents);
      }),
      mergeMap(url => {
        return this.httpClient.get(url, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }),
      toArray()
    ) as Observable<Array<Human>>;
  }
}
