import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

constructor(private router: Router) {}
movieName;
  openDetailsWithName() {
    let navigationExtras: NavigationExtras = {
      state: {
        movieName: this.movieName
      }
    };
    this.router.navigate(['detail'], navigationExtras);
  }

}
