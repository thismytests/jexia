import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PeopleComponent} from './root/people.component';

// sections
import {HeaderSectionModule} from 'app/commons/sections/header-section';
import {ContentSectionModule} from 'app/commons/sections/content-section';
import {FooterSectionModule} from 'app/commons/sections/footer-section';

// routing
import {PeopleRoutingModule} from './routing';

// api
import {PeopleServiceModule} from 'app/commons/api/people';

// children
import {PeopleListModule} from 'app/containers/people/people-list';
import {SpinnerModule} from 'app/commons/components/spinner';

@NgModule({
  declarations: [PeopleComponent],
  imports: [
    CommonModule,

    // sections
    HeaderSectionModule,
    ContentSectionModule,
    FooterSectionModule,


    // routing
    PeopleRoutingModule,

    // api
    PeopleServiceModule,

    // children
    PeopleListModule,

    SpinnerModule
  ]
})
export class PeopleModule {
}
