import { Component, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonTabs } from '@ionic/angular';
import { MoviesService } from '../services/movies.service';
import{ TMDB_IMAGE_URL} from '../common/appSettings';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  photoUrl: string;
  randomTrendingMovie;
  constructor(private router: Router, private moviesService: MoviesService) {}
  trendingMovies;
  slideOpts ={
    slidesPerView:2
  }
  onGoToDetail(id) {
    let navigationExtras: NavigationExtras = {
      state: {
        id: id,
      },
    };
    this.router.navigate(["detail"], navigationExtras);
  }

  ngOnInit() {
    this.photoUrl = TMDB_IMAGE_URL;
    this.moviesService.getTrendingsMovies().subscribe(res => {
      this.trendingMovies = res.results;
      let rand = Math.random();
      let max = this.trendingMovies.length -1
      rand = Math.round(rand * (max-1));
      console.log('rand',rand);
      this.randomTrendingMovie = this.trendingMovies[rand];
      console.log('random',this.randomTrendingMovie)
    });
  }
}
