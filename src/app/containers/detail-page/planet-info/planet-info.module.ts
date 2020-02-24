import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlanetInfoComponent} from './root/planet-info.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [PlanetInfoComponent],
  exports: [PlanetInfoComponent],
  imports: [
    CommonModule,

    // material
    MatCardModule
  ]
})
export class PlanetInfoModule {
}
