import { Injectable } from '@angular/core';

@Injectable()
export class LightsService {

  private lights;

  constructor() {
    this.addTestLights();
  }

  getLights(): Promise<Object>  {
    if (!this.lights) this.addTestLights();

    return Promise.resolve(this.lights);
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
    hue: 23536,
    saturation: 144,
    brightness: 254
  }
};

