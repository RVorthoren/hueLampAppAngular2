import { Component, OnInit } from '@angular/core';

import { Light } from '../light';

@Component({
  selector: 'lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.css']
})
export class LightsComponent implements OnInit {

  private lights: Light[];

  constructor() {
    this.lights = [
      {
        id: 1,
        name: 'Hue Lamp 1',
        on: false,
        hue: 4444,
        saturation: 254,
        brightness: 254
      },
      {
        id: 2,
        name: 'Hue Lamp 2',
        on: false,
        hue: 23536,
        saturation: 144,
        brightness: 254
      },
      {
        id: 3,
        name: 'Hue Lamp 3',
        on: false,
        hue: 23536,
        saturation: 144,
        brightness: 254
      }
    ];
  }

  ngOnInit(): void {

  }

}
