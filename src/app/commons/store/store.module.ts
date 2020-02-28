import {NgModule} from '@angular/core';

// ng redux
import {
  NgReduxModule,
  NgRedux, DevToolsExtension,
} from '@angular-redux/store';
import {
  NgReduxRouterModule,
  NgReduxRouter
} from '@angular-redux/router';

import {provideReduxForms} from '@angular-redux/form';

// action creators
import {ExampleActionService} from './example/example.action.service';

// root reducer
import {rootReducer} from './root.reducer';

// types
import {IApplication} from './store.types';
import {PeopleServiceModule} from '../api/people';
import {EffectsModule} from '@ngrx/effects';
import {PeopleEffectsService} from './example/people-effects.service';

@NgModule({
  imports: [
    // store
    NgReduxModule,
    NgReduxRouterModule.forRoot(),

    //  api
    PeopleServiceModule,

    //  side effects
    EffectsModule.forRoot([
      PeopleEffectsService
    ])
  ],
  providers: [
    ExampleActionService,

    // sideeffects
    PeopleEffectsService

  ]
})
export class StoreModule {
  //  todo ... must be refactoring!!!

  constructor(public store: NgRedux<IApplication>,
              devTools: DevToolsExtension,
              ngReduxRouter: NgReduxRouter) {
    store.configureStore(
      rootReducer,
      {},
      [
        // createLogger()
      ],
      devTools.isEnabled() ? [devTools.enhancer()] : []
    );

    // Enable syncing of Angular router state with our Redux store.
    ngReduxRouter.initialize();

    // Enable syncing of Angular form state with our Redux store.
    provideReduxForms(store);

  }
}
