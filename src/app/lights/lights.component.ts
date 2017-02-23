import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Light } from '../light';
import { LightsService } from './lights.service';

@Component({
  selector: 'lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.css']
})
export class LightsComponent implements OnInit {

  private lights: Light[];

  constructor(
    private lightsService: LightsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getLights();
  }

  private getLights(): void {
    this.lightsService.getLights().then(
      lights => this.lights = lights
    );
  }

  goToDetail(light): void {
    this.router.navigate(['/lights',light.id]);
  }
}
