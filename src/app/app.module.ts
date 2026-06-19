import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DangerZoneComponent } from './danger-zone/danger-zone.component';
import { DangerButtonComponent } from './danger-button/danger-button.component';
import { RedirectionComponent } from './redirection/redirection.component';
import { MyFavoritePlaceComponent } from './my-favorite-place/my-favorite-place.component';
import { MyFavoritePlaceButtonComponent } from './my-favorite-place-button/my-favorite-place-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DangerZoneComponent,
    DangerButtonComponent,
    RedirectionComponent,
    MyFavoritePlaceComponent,
    MyFavoritePlaceButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
