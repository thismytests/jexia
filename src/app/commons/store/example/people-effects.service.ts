import {Injectable} from '@angular/core';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {ActionsTypes} from './example.action.service';
import {PeopleService} from '../../api/people';
import {of} from 'rxjs';

import {Actions, createEffect, Effect} from '@ngrx/effects';
import {ExampleState} from './example.types';

@Injectable({
  providedIn: 'root'
})
export class PeopleEffectsService {

  constructor(
    private actions$: Actions,
    private peopleService: PeopleService
  ) {
  }

  @Effect()
  loadMovies$ = createEffect(() => this.actions$.pipe(
    switchMap(() => {
      return this.peopleService.getPeople()
        .pipe(
          tap((data) => {
            console.log(`data`, data);
          })
          // map(movies => new movieActions.LoadMoviesSuccess(movies)),
          // catchError(error => of(new movieActions.LoadMoviesFail(error)))
        );
    })
  ));
}
