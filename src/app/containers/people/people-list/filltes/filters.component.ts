import {
  Component,
  OnInit, Output
} from '@angular/core';

import {Router} from '@angular/router';

import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';


import {Subject} from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output() selected: Subject<any> = new Subject<any>();

  public SEARCH_NAME = 'search';
  searchValue = '';


  filtersForm: FormGroup;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.createFrom();

    this.filtersForm.valueChanges.subscribe((data) => {
      this.selected.next(data);
    });
  }

  createFrom() {
    const formControls: any = {
      [this.SEARCH_NAME]: new FormControl(this.searchValue, [
        Validators.required
      ]),
    };
    this.filtersForm = new FormGroup(formControls);
  }
}
