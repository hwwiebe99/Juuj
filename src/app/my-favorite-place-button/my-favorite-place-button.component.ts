import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'my-favorite-place-button',
  templateUrl: './my-favorite-place-button.component.html',
  styleUrls: ['./my-favorite-place-button.component.scss']
})
export class MyFavoritePlaceButtonComponent {
  buttonPages: string [] = ['My/Favorite/Place'];
  constructor(private router: Router)
  {

  };
  redirect()
  {
    let sel = this.buttonPages[0];
    this.router.navigate([sel]);
  }
}
