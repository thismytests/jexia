import {combineReducers} from 'redux';

// redux form
import {
  composeReducers,
  defaultFormReducer
} from '@angular-redux/form';

// reducers
import {createExampleReducer} from './example/example.reducer';
import {createAuthReducer} from './auth';

export const rootReducer = composeReducers(
  defaultFormReducer(),

  combineReducers({

    // example
    example: createExampleReducer(),
    auth: createAuthReducer()
  })
);
