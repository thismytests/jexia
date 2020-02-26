import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

// rxjs
import {BehaviorSubject, from, interval, Observable, Subject, timer} from 'rxjs';

import {
  catchError,
  map,
  mergeMap, repeat, scan,
  switchMap, takeUntil, tap,
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
    let counter = 0

    const subs: Subject<any> = new Subject<any>();

    let newUrl = this.url;

    const arr: Array<Human> = [];

    return interval(1000).pipe(
      mergeMap(data => {
        return this.httpClient.get(newUrl, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).pipe(
          tap((val: People) => {newUrl = val.next}),
          tap(val => {
            if (val.next) {
              subs.next(true);
              arr.push(...val.results);
            }
          }),
          map((val: People) => {
            return arr;
          }),
          tap(val => console.log('val', val)),
          takeUntil(subs),

          catchError(err => {
            return err;
          })
        ) as Observable<any>;
      })

    );
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
