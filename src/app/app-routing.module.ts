import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { LightsComponent } from './lights/lights.component';
import { LightComponent } from './light/light.component';
import { EditComponent as EditLight } from './light/edit/edit.component';
import { EditComponent as EditConfig } from './configuration/edit/edit.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'configuration/edit', component: EditConfig },
  { path: 'lights', component: LightsComponent },
  { path: 'lights/:id', component: LightComponent},
  { path: 'lights/:id/edit', component: EditLight},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
