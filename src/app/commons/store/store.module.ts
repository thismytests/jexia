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
import {AuthActionService} from './auth';

@NgModule({
  imports: [
    NgReduxModule,
    NgReduxRouterModule
  ],
  providers: [
    ExampleActionService,
    AuthActionService
  ]
})
export class StoreModule {
  //  todo ... must be refactoring!!!

  constructor(public store: NgRedux<IApplication>,
              devTools: DevToolsExtension) {
    store.configureStore(
      rootReducer,
      {},
      [
        // createLogger()
      ],
      devTools.isEnabled() ? [devTools.enhancer()] : []
    );

    // Enable syncing of Angular router state with our Redux store.
    // ngReduxRouter.initialize();

    // Enable syncing of Angular form state with our Redux store.
    provideReduxForms(store);

  }
}
