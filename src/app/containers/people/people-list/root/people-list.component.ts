import {
  Component,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import {Router} from '@angular/router';

export interface PeopleListData {
  name: string;
  gender: string;
  birthday: string;
  homePlanet: string;
}

interface Column {
  name: string;
  isDesc: boolean;
}

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnChanges {
  constructor(public router: Router) {
  }

  @Input() dataSource = null;
  @Output() sortBy;

  copyDataSource = null;

  displayedColumns: string[] = ['name', 'gender', 'birthday', 'homePlanet'];

  sortedColumns: { [key: string]: Column } = {
    name: {name: 'name', isDesc: false},
    gender: {name: 'gender', isDesc: false},
    birthday: {name: 'birthday', isDesc: false},
    homePlanet: {name: 'homePlanet', isDesc: false},
  };

  relocate(name: string): void {
    this.router.navigate([`/detail/${name}`]);
  }

  onSort(item: Column) {
    const data = this.copyDataSource.slice();
    item.isDesc = !item.isDesc;

    const sort = data.sort((a, b) => {
      if (item.isDesc) {
        return (a[item.name] < b[item.name]) ? 1 : -1;
      }

      if (!item.isDesc) {
        return (a[item.name] > b[item.name]) ? 1 : -1;
      }
    });

    this.copyDataSource = sort;
  }

  onChangeFilters(event: { search: string }) {
    if (!event.search.length) {
      this.copyDataSource = this.dataSource.slice();
      return;
    }

    const data = this.copyDataSource.slice();

    const updateData = data.filter((item) => {
      return !item.name.toUpperCase().indexOf(event.search.toUpperCase());
    });

    this.copyDataSource = updateData;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.copyDataSource = changes.dataSource.currentValue.slice();
  }

}
