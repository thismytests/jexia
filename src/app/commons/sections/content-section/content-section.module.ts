import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// root
import {ContentSectionComponent} from './root';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContentSectionComponent],
  exports: [ContentSectionComponent]
})
export class ContentSectionModule {
}
