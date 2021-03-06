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
import { EditComponent as LightEdit } from './light/edit/edit.component';
import { EditComponent as EditConfig } from './configuration/edit/edit.component';
import { HeaderComponent } from './light/header/header.component';

import { LightsService } from './lights/lights.service';
import { ConfigService } from './configuration/config.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfigurationComponent,
    LightsComponent,
    LightComponent,
    LightEdit,
    EditConfig,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    LightsService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
