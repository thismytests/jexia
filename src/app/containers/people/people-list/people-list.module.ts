import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

// components
import {PeopleListComponent} from './root/people-list.component';
import {PersonsModule} from './persons';

// @angular-material
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {FiltersModule} from './filltes';


@NgModule({
  declarations: [PeopleListComponent],
  imports: [
    CommonModule,
    RouterModule,

    // material
    MatTableModule,
    MatIconModule,

    // children
    FiltersModule,
    PersonsModule
  ],
  exports: [PeopleListComponent]
})
export class PeopleListModule {
}
