import { Injectable } from '@angular/core';

import { Light } from '../light';

@Injectable()
export class LightsService {

  private lightsObject;

  constructor() {
    this.lightsObject = {};
  }

  private saveLights(lights: Light[]) : void {
    lights.forEach(value => {
      this.lightsObject[value.id] = value;
    });
  }

  getLights(): Promise<Light[]>  {
    const lights = Test_Lights;

    this.saveLights(lights);

    return Promise.resolve(lights);
  }

  getLightsSlow() : Promise<Light[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getLights()), 2000);
    });
  }
}

/*Test lights*/
const Test_Lights: Light[] = [
  {
    id: 1,
    name: 'Hue Lamp 1',
    on: false,
    hue: 4444,
    saturation: 254,
    brightness: 254
  },
  {
    id: 2,
    name: 'Hue Lamp 2',
    on: false,
    hue: 23536,
    saturation: 144,
    brightness: 254
  },
  {
    id: 3,
    name: 'Hue Lamp 3',
    on: false,
    hue: 23536,
    saturation: 144,
    brightness: 254
  }
];

