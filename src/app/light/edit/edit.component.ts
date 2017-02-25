import {
  Component,
  OnInit
} from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { LightsService } from '../../lights/lights.service';
import { Light } from '../../light';

@Component({
  selector: 'light-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private light: Light;
  private edited: Boolean;

  constructor(
    private route: ActivatedRoute,
    private lightService: LightsService,
    private location: Location
  ) {
    this.edited = false;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let paramsId = params['id'];

      this.light = Object.assign({}, this.lightService.getLight(paramsId));
      this.edited = false;
    });
  }

  isEdited() {
    this.edited = true;
  }

  updateLight() {
    this.lightService.updateLight(this.light);
    this.edited = false;
  }

  backToDetail() {
    this.location.back();
  }
}
