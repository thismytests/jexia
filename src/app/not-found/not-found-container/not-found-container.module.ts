import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// sections


// children modules
import {NotFoundModule} from '../not-found-component/';

// root component
import {NotFoundContainerComponent} from './root';
import {HeaderSectionModule} from 'app/commons/sections/header-section';
import {ContentSectionModule} from 'app/commons/sections/content-section';
import {FooterSectionModule} from 'app/commons/sections/footer-section';

const sections: Array<any> = [
  HeaderSectionModule,
  ContentSectionModule,
  FooterSectionModule
];

@NgModule({
  imports: [
    CommonModule,

    ...sections,
    //    children modules
    NotFoundModule
  ],
  declarations: [NotFoundContainerComponent]
})
export class NotFoundContainerModule {
}
