import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DangerZoneComponent } from './danger-zone/danger-zone.component';
import { RedirectionComponent } from './redirection/redirection.component';
import { MyFavoritePlaceComponent } from './my-favorite-place/my-favorite-place.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  {
    path: 'The/Danger/Zone',
    component: DangerZoneComponent
  },
  {
    path: 'redirection',
    component: RedirectionComponent
  },
  {
    path: 'My/Favorite/Place',
    component: MyFavoritePlaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
