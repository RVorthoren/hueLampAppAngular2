import { Component, Input } from '@angular/core';

import { Light } from '../../light';

@Component({
  selector: 'light-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() light: Light;
  constructor() { }
}
