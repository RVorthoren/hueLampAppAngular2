import { Injectable } from '@angular/core';

import { Light } from '../light';

@Injectable()
export class LightsService {

  private lights: any;

  constructor() {
    this.addTestLights();
  }

  getLights(): Promise<Object>  {
    if (!this.lights) this.addTestLights();

    return Promise.resolve(this.lights);
  }

  getLight(id: number) {
    if (!this.lights) this.addTestLights();
    if (!(id in this.lights)) return {};

    return this.lights[id];
  }

  updateLight(light: Light) {
    if (!this.lights || !light) return;
    this.lights[light.id] = light;
  }

  private addTestLights(): void {
    this.lights = Test_Lights;
  }
}

/*Test lights*/
const Test_Lights: Object = {
  1: {
    id: 1,
    name: 'Hue Lamp 1',
    on: true,
    hue: 4444,
    saturation: 254,
    brightness: 254
  },
  2: {
    id: 2,
    name: 'Hue Lamp 2',
    on: true,
    hue: 23536,
    saturation: 144,
    brightness: 254
  },
  3: {
    id: 3,
    name: 'Hue Lamp 3',
    on: true,
    hue: 13215,
    saturation: 254,
    brightness: 254
  }
};

