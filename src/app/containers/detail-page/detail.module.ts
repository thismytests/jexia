import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {DetailComponent} from './root/detail.component';

// sections
import {HeaderSectionModule} from 'app/commons/sections/header-section';
import {ContentSectionModule} from 'app/commons/sections/content-section';
import {FooterSectionModule} from 'app/commons/sections/footer-section';

// api
import {PeopleServiceModule} from 'app/commons/api/people';

// routing
import {DetailRoutingModule} from './routing';
import {DetailServiceModule} from 'app/commons/api/detail';

// children
import {SpinnerModule} from 'app/commons/components/spinner';
import {DetailChartModule} from './detail-chart';
import {ItemDescriptionModule} from './item-description';
import {PlanetInfoModule} from './planet-info';

@NgModule({
  declarations: [DetailComponent],
  exports: [DetailComponent],
  imports: [
    CommonModule,

    // sections
    HeaderSectionModule,
    ContentSectionModule,
    FooterSectionModule,

    PeopleServiceModule,
    DetailServiceModule,

    // routing
    RouterModule,
    DetailRoutingModule,

    // children
    SpinnerModule,
    DetailChartModule,
    ItemDescriptionModule,
    PlanetInfoModule
  ]
})
export class DetailModule {
}
