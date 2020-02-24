import {Component, Input, OnInit} from '@angular/core';

// types
import {DataDescription} from './types';

@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.scss']
})
export class ItemDescriptionComponent implements OnInit {

  @Input() data: DataDescription = null;
  constructor() { }

  ngOnInit(): void {
  }

}
