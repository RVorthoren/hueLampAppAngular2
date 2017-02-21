import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { LightsComponent } from './lights/lights.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'config', component: ConfigurationComponent },
  { path: 'lights', component: LightsComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
