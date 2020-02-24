import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// root
import {FooterSectionComponent} from './root';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooterSectionComponent],
  exports: [FooterSectionComponent]
})
export class FooterSectionModule {
}
