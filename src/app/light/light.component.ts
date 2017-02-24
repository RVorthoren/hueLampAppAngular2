import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Light } from '../light';
import { LightsService } from '../lights/lights.service';

@Component({
  selector: 'light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent implements OnInit {

  private light: Light;

  constructor(
    private route: ActivatedRoute,
    private lightService: LightsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
       let paramsId = params['id'];

       this.light = this.lightService.getLight(paramsId);
    });
  }

}
