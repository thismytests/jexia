import {Injectable} from '@angular/core';

// redux
import {NgRedux} from '@angular-redux/store';

// types
import {ExampleAction} from './example.types';

export class ActionsTypes {
  static readonly INCREMENT = 'Example/INCREMENT';
  static readonly DECREMENT = 'Example/DECREMENT';
}

@Injectable()
export class ExampleActionService {

  constructor(private redux: NgRedux<any>) {
  }

  makeIncrement() {
    const action: ExampleAction = {
      type: ActionsTypes.INCREMENT
    };

    this.redux.dispatch(action);
  }

  makeDecrement() {
    const action: ExampleAction = {
      type: ActionsTypes.DECREMENT
    };

    this.redux.dispatch(action);
  }
}
