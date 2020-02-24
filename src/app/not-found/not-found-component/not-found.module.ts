import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// root
import {NotFoundComponent} from './root';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotFoundComponent],
  exports: [NotFoundComponent]
})
export class NotFoundModule {
}
