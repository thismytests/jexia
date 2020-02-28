import { Reducer } from 'redux';

// types
import {
  ExampleAction,
  ExampleState
} from './example.types';

import {
  ActionsTypes
} from './example.action.service';

// default state
const defaultInitState: ExampleState = {
  counter: 0
};

const increment = (state: ExampleState) => {
  const copy = JSON.parse(JSON.stringify(state));
  copy.counter++;
  return copy;
};

const decrement = (state: ExampleState) => {
  const copy = JSON.parse(JSON.stringify(state));
  copy.counter--;
  return copy;
};

export function createExampleReducer(): Reducer<any> {
  return function (state: ExampleState = defaultInitState,
    action: ExampleAction): any {
    switch (action.type) {
      case ActionsTypes.INCREMENT:

        return increment(state);

      case ActionsTypes.DECREMENT:
        return decrement(state);

      default:
        return state;
    }
  };
}
