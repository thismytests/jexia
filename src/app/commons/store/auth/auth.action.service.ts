import {Injectable} from '@angular/core';

// redux
import {NgRedux} from '@angular-redux/store';

// types
import {AuthAction} from './auth.types';

export class ActionsTypes {
  static readonly SET_TOKEN = 'Auth/SET_TOKEN';
  static readonly DELETE_TOKEN = 'Auth/DELETE_TOKEN';
}

@Injectable()
export class AuthActionService {

  constructor(private redux: NgRedux<any>) {
  }

  setToken(token: string) {
    const action: AuthAction = {
      type: ActionsTypes.SET_TOKEN,
      token
    };

    this.redux.dispatch(action);
  }

  deleteToken() {
    const action: AuthAction = {
      type: ActionsTypes.DELETE_TOKEN
    };

    this.redux.dispatch(action);
  }

}
