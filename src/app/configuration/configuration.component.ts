import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Config } from '../Config';

@Component({
  selector: 'configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  private config: Config;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.config = new Config();
    this.config.ip = "localhost";
    this.config.port = 80;
    this.config.username = "461be51ef5609e7164ca3a9eac2c31a";

  }

  ngOnInit() {

  }

  goToEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
