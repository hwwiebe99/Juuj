import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DangerZoneComponent } from './danger-zone/danger-zone.component';
import { DangerButtonComponent } from './danger-button/danger-button.component';
import { RedirectionComponent } from './redirection/redirection.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DangerZoneComponent,
    DangerButtonComponent,
    RedirectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
