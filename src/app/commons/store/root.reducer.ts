import {combineReducers} from 'redux';

// redux form
import {
  composeReducers,
  defaultFormReducer
} from '@angular-redux/form';

// reducers
import {createExampleReducer} from './example/example.reducer';

export const rootReducer = composeReducers(
  defaultFormReducer(),

  combineReducers({

    // example
    example: createExampleReducer(),
  })
);
