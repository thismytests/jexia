import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemDescriptionComponent} from './root/item-description.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [ItemDescriptionComponent],
  exports: [ItemDescriptionComponent],
  imports: [
    CommonModule,

    // material
    MatCardModule
  ]
})
export class ItemDescriptionModule {
}
