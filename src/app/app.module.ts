import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { LightsComponent } from './lights/lights.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfigurationComponent,
    LightsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'config',
        component: ConfigurationComponent
      },
      {
        path: 'lights',
        component: LightsComponent
      },
      {
        path: '**',
        redirectTo: '/home'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
