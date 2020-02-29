import {Injectable} from '@angular/core';

// rxjs
import {
  createAction,
  props,
  Store
} from '@ngrx/store';

// constants
import {ActionsTypes} from './types.constants';

export const IncrementExampleAction = createAction(
  ActionsTypes.INCREMENT,
);

@Injectable()
export class ExampleActionService {

  constructor(private store: Store<any>) {
  }

  makeIncrement() {
    this.store.dispatch(IncrementExampleAction());
  }

  makeDecrement() {
    createAction(
      ActionsTypes.DECREMENT,
      props<{ payload: any }>()
    );
  }
}
