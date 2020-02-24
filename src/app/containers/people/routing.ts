import {Route, RouterModule} from '@angular/router';

// root
import {PeopleComponent} from './root';
import {NgModule} from '@angular/core';

export const routes: Array<Route> = [
  {
    path: 'people',
    component: PeopleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
