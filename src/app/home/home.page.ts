import { Component, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonTabs } from '@ionic/angular';
import { MoviesService } from '../services/movies.service';
import{ TMDB_IMAGE_URL} from '../common/appSettings';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  photoUrl: string;
  constructor(private router: Router, private moviesService: MoviesService) {}
  movieName;
  trendingMovies;
  slideOpts ={
    slidesPerView:3
  }
  openDetailsWithName() {
    let navigationExtras: NavigationExtras = {
      state: {
        movieName: this.movieName,
      },
    };
    this.router.navigate(["detail"], navigationExtras);
  }

  ngOnInit() {
    this.photoUrl = TMDB_IMAGE_URL;
    this.moviesService.getTrendingsMovies().subscribe(res => {
      this.trendingMovies = res.results;
      console.log(this.trendingMovies);
    });
  }
}
