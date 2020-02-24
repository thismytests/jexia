import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

// @angular/material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

// root
import {HeaderSectionComponent} from './root';

@NgModule({
  imports: [
    CommonModule,

    // @angular/material
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,

    // routing
    RouterModule,
  ],
  declarations: [HeaderSectionComponent],
  exports: [HeaderSectionComponent]
})
export class HeaderSectionModule {
}
