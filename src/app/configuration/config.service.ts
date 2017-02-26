import { Injectable } from '@angular/core';
import { Config } from '../config';

@Injectable()
export class ConfigService {

  private config: Config;

  constructor() {
    this.config = new Config();
    this.config.ip = "localhost";
    this.config.port = 80;
    this.config.username = "461be51ef5609e7164ca3a9eac2c31a";

  }

  getConfig(): Promise<Config> {
    return Promise.resolve(this.config);
  }
}
