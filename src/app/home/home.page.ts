import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

constructor(private router: Router) {}
  movie = {
    title: 'Jurassik Park'
  };
  openDetailsWithQueryParams() {
    let navigationExtras: NavigationExtras = {
      state: {
        movie: this.movie
      }
    };
    this.router.navigate(['detail'], navigationExtras);
  }

}
