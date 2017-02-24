import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { LightsService } from '../../lights/lights.service';
import { Light } from '../../light';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

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
