// rxjs
import {
  Action,
  createReducer,
  on
} from '@ngrx/store';

// types
import {
  ExampleState
} from './example.types';

// actions
import {IncrementExampleAction} from './example.action.service';

// default state
const defaultInitState: ExampleState = {
  counter: 0
};

const reducer = createReducer(
  defaultInitState,
  on(IncrementExampleAction, (state: any) => {
    state.counter++;
    return state;
  }),
);

export function createExampleReducer(
  state: {},
  action: Action
): ExampleState {
  return reducer(state, action);
}
