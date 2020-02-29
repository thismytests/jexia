import {NgModule} from '@angular/core';

// rxjs
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

// action creators
import {ExampleActionService} from './example/example.action.service';

// types
import {createExampleReducer} from './example/example.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({
      example: createExampleReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: false, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    ExampleActionService,
  ]
})
export class CustomStoreModule {
}
