import {Reducer} from 'redux';

//  types
import {
  AuthAction,
  AuthState
} from './auth.types';
import {ActionsTypes} from './auth.action.service';

// default init state
const defaultInitState: AuthState = {};

const setToken = (state: AuthState, token: string) => {
  const copy: AuthState = JSON.parse(JSON.stringify(state));
  return copy;
};


const deleteToken = (state: AuthState) => {
  const copy: AuthState = JSON.parse(JSON.stringify(state));
  return copy;
};

export function createAuthReducer(): Reducer<any> {
  return function (state: AuthState = defaultInitState,
                   action: AuthAction): any {

    switch (action.type) {
      case ActionsTypes.SET_TOKEN:
        return setToken(state, action.token);

      case ActionsTypes.SET_TOKEN:
        return deleteToken(state);

      default:
        return state;
    }
  };
}
