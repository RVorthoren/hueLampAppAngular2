import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Light } from '../light';

@Component({
  selector: 'light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent implements OnInit {

  private light: Light;

  constructor(private route: ActivatedRoute) {
    this.light = new Light();
    this.light.name = "Hue Lamp 1";
    this.light.on = true;
    this.light.hue = 4444;
    this.light.saturation = 254;
    this.light.brightness = 254;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.light.id = params['id'];
    });
  }

}
