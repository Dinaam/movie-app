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

  firstMovie: Movie;
  movieName:string;

  constructor(private route: ActivatedRoute, private router: Router, private moviesService: MoviesService) {
    this.route.queryParams.subscribe(params => {
      let param = this.router.getCurrentNavigation().extras.state;
      console.log('param',param);
      if (param && param.movieName) {
        this.movieName = param.movieName;
        this.moviesService.getMovie(this.movieName).subscribe(res => {
          console.log('res',res);
          this.firstMovie = res.results[0];
          this.firstMovie.url = TMDB_IMAGE_URL+'w500/'+this.firstMovie.poster_path;
        });
      }
    });
  }
 
  ngOnInit() { }
}


