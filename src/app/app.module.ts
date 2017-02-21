import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { LightsComponent } from './lights/lights.component';
import { LightComponent } from './light/light.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfigurationComponent,
    LightsComponent,
    LightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
