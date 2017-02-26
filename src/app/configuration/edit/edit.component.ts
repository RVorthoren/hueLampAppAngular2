import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ConfigService } from '../config.service';
import { Config } from '../../config';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private config: Config;
  private edited: Boolean;

  constructor(
    private location: Location,
    private configService: ConfigService
  ) {
    this.edited = false;
    this.config = new Config();
  }

  ngOnInit() {
    this.configService.getConfig().then(configObject => {
      this.config = Object.assign({}, configObject);
      this.edited = false;
    })
  }

  edit() {
    this.edited = true;
  }

  update() {
    this.configService.updateConfig(this.config);
    this.edited = false;
  }

  back() {
    this.location.back();
  }
}
