import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Config } from '../Config';
import { ConfigService } from './config.service';

@Component({
  selector: 'configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  private config: Config;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private configService: ConfigService
  ) {

  }

  ngOnInit() {
    this.configService.getConfig().then(configObject => {
      this.config = configObject;
    })
  }

  goToEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
