import {Route, RouterModule} from '@angular/router';

// root
import {DetailComponent} from './root';
import {NgModule} from '@angular/core';

export const routes: Array<Route> = [
  {
    path: 'detail/:id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
