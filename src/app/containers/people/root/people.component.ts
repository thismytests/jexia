import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

// api
import {PeopleService} from 'app/commons/api/people';

export interface PeopleListData {
  name: string;
  gender: string;
  birthday: string;
  homePlanet: string;
}

// types
import {Human} from 'app/commons/api/people/types';
import {Observable, Subscription} from 'rxjs';
import {ExampleActionService} from '../../../commons/store/example';
import {select} from '@angular-redux/store';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, OnDestroy {
  @select(['example', 'counter']) readonly counter: Observable<number>;

  isShowSpinner = true;
  peopleListData: PeopleListData[] = [];
  peopleServiceSubs: Subscription = null;

  constructor(public peopleService: PeopleService,
              public exampleActionService: ExampleActionService) {
  }

  incrementStore() {
    this.exampleActionService.makeIncrement();
  }

  decrementStore() {
    this.exampleActionService.makeDecrement();
  }


  ngOnInit() {
    this.peopleServiceSubs = this.peopleService.getPeople()
      .pipe()
      .subscribe((data) => {
        if (data === null) {
          return;
        }
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
