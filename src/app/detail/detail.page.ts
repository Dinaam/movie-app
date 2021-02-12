import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  movie: object;
  movieName:string;

  constructor(private route: ActivatedRoute, private router: Router, private moviesService: MoviesService) {
    this.route.queryParams.subscribe(params => {
      let param = this.router.getCurrentNavigation().extras.state;
      console.log('param',param);
      if (param && param.movieName) {
        this.movieName = param.movieName;
        this.moviesService.getMovie(this.movieName).subscribe(movie => {
          this.movie = movie;
        });
      }
    });
  }
 
  ngOnInit() { }
}


