import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// root component
import {PersonsComponent} from './root/persons.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  exports: [PersonsComponent],
  imports: [
    CommonModule,

    // material
    MatTableModule,
    MatIconModule,
    MatPaginatorModule// material
  ],
  declarations: [
    PersonsComponent,
  ],
})
export class PersonsModule {
}
