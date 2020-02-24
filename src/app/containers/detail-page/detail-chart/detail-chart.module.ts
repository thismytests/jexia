import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule} from '@angular/router';

// components
import {DetailChartComponent} from './root/detail-chart.component';
import {GraphComponent} from './visuals/graph';
import {SHARED_VISUALS} from './visuals/shared';
import {D3_DIRECTIVES, D3Service} from 'prototype/containers/detail-page/detail-chart/d3';


@NgModule({
  declarations: [DetailChartComponent,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES],
  exports: [GraphComponent, DetailChartComponent],
  providers: [D3Service],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class DetailChartModule {
}
