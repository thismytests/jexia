import {
  Component,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import {Router} from '@angular/router';

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
