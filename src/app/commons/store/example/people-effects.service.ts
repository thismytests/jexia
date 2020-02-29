import {Injectable} from '@angular/core';

// rxjs
import {
  switchMap,
  tap
} from 'rxjs/operators';
import {PeopleService} from '../../api/people';

import {
  Actions,
  createEffect,
  Effect
} from '@ngrx/effects';

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
