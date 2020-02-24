import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

// api
import {PeopleService} from 'app/commons/api/people';

// containers
import {PeopleListData} from 'prototype/containers/people/people-list/root/people-list.component';

// types
import {Human} from 'app/commons/api/people/types';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, OnDestroy {
  isShowSpinner = true;
  peopleListData: PeopleListData[] = [];
  peopleServiceSubs: Subscription = null;

  constructor(public peopleService: PeopleService) {
  }


  ngOnInit() {
    this.peopleServiceSubs = this.peopleService.getPeople()
      .pipe()
      .subscribe((data) => {
        this.peopleListData = this.dataConvectorForList(data);
        this.isShowSpinner = false;
      });
  }

  dataConvectorForList(data: Array<Human>): Array<PeopleListData> {
    if (data instanceof Error) {
      return;
    }

    return data.map((item) => {
      return {
        birthday: item.birth_year, gender: item.gender, homePlanet: item.homeworld, name: item.name
      };
    });
  }

  ngOnDestroy(): void {
    this.peopleServiceSubs.unsubscribe();
  }

}
