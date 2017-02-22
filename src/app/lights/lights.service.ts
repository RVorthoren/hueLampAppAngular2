import { Injectable } from '@angular/core';

import { Light } from '../light';

@Injectable()
export class LightsService {

  constructor() { }

  getLights(): Promise<Light[]>  {
    return Promise.resolve(Test_Lights);
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

