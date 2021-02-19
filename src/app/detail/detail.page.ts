import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../model/Movie';
import { MoviesService } from '../services/movies.service';
import{ AppSettings, TMDB_IMAGE_URL } from '../common/appSettings';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  movie: Movie;
  movieId:number;
  photoUrl: string;

  constructor(private route: ActivatedRoute, private router: Router, private moviesService: MoviesService) {
    this.route.queryParams.subscribe(params => {
      let param = this.router.getCurrentNavigation().extras.state;
      console.log('param',param);
      if (param && param.id) {
        this.movieId = param.id;
        this.moviesService.getMovie(this.movieId).subscribe(res => {
          this.movie = res;
        });
      }
    });
  }
 
  ngOnInit() {
    this.photoUrl = TMDB_IMAGE_URL;
   }
}


