import {Component} from '@angular/core';

import {Router} from '@angular/router';

// translate

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css']
})
export class HeaderSectionComponent {

  constructor(private router: Router) {
  }


}

