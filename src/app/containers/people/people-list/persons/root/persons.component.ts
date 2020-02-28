import {
  Component,
  Input, OnChanges,
  OnInit,
  Output, SimpleChanges
} from '@angular/core';
import {Router} from '@angular/router';
import {PageEvent} from '@angular/material/paginator';

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
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnChanges {
  @Input() dataSource: Array<PeopleListData> = null;
  @Output() sortBy;

  copyDataSource: Array<PeopleListData> = null;

  displayedColumns: string[] = ['name', 'gender', 'birthday', 'homePlanet'];

  sortedColumns: { [key: string]: Column } = {
    name: {name: 'name', isDesc: false},
    gender: {name: 'gender', isDesc: false},
    birthday: {name: 'birthday', isDesc: false},
    homePlanet: {name: 'homePlanet', isDesc: false},
  };

  // MatPaginator Inputs
  length = 0;
  pageSize = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex = 0;

  constructor(public router: Router) {
  }


  recountItems(skipCount) {
    return this.dataSource
      .slice()
      .splice(0, skipCount);
  }

  paginator(event: PageEvent) {
    const skip = event.pageSize;
    this.copyDataSource = this.recountItems(skip);
  }

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

  ngOnChanges(changes: SimpleChanges): void {
    this.copyDataSource = changes.dataSource.currentValue.slice();
    this.length = this.copyDataSource.length;
    this.pageSize = this.length;

    this.paginator({
      pageSize: this.pageSize,
      previousPageIndex: this.pageSize,
      length: this.length,
      pageIndex: this.pageIndex
    });
  }
}
