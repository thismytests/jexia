import {
  Component,
  Input,
  OnInit
} from '@angular/core';

// types
import {Planet} from '../types';

@Component({
  selector: 'app-planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.scss']
})
export class PlanetInfoComponent implements OnInit {
  @Input() data: Planet;

  constructor() { }

  ngOnInit(): void {
  }

}
