import { Component, OnInit } from '@angular/core';
import { Config } from '../Config';

@Component({
  selector: 'configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  private config: Config;

  constructor() {
    this.config = new Config();
    this.config.ip = "localhost";
    this.config.port = 80;
    this.config.username = "461be51ef5609e7164ca3a9eac2c31a";

  }

  ngOnInit() {

  }
}
