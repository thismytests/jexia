import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import {
  Subject,
  Subscription
} from 'rxjs';
import {Store} from '@ngrx/store';

// api
import {PeopleService} from 'app/commons/api/people';

// types
import {Human} from 'app/commons/api/people/types';
import {ExampleActionService} from '../../../commons/store/example';

export interface PeopleListData {
  name: string;
  gender: string;
  birthday: string;
  homePlanet: string;
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, OnDestroy {
  readonly counter: Subject<number> = new Subject<number>();

  isShowSpinner = true;
  peopleListData: PeopleListData[] = [];
  peopleServiceSubs: Subscription = null;

  constructor(public peopleService: PeopleService,
              private store: Store<any>,
              public exampleActionService: ExampleActionService) {
    this.store.subscribe(data => {
      console.log('data', data);
      this.counter.next(data.example.counter);
    });
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
