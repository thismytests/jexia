import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// containers
import {PeopleModule} from 'app/containers/people/people.module';

import {NotFoundContainerComponent, NotFoundContainerModule} from './not-found/not-found-container';
import {DetailModule} from 'prototype/containers/detail-page';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/people',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: NotFoundContainerComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [
    NotFoundContainerModule,

    PeopleModule,
    DetailModule,

    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
