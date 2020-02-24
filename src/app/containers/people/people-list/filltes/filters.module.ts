import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// routing
import {RouterModule} from '@angular/router';

// form
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// root component
import {FiltersComponent} from './filters.component';

// @angular material
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    //  routing
    RouterModule,

    //  forms
    FormsModule,
    ReactiveFormsModule,

    //  @angular material
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,

  ],
  declarations: [FiltersComponent],
  exports: [FiltersComponent],
})
export class FiltersModule {
}
