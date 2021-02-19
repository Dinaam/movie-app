import { Injectable } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';  
import { HttpClient } from '@angular/common/http';
import{ AppSettings } from '../common/appSettings';
import { MovieSearch } from '../model/MovieSearch';
import { Movie } from '../model/Movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  
  
  constructor(private httpClient: HttpClient) { }

  getMovie(id:number){
    let param ='';
    return this.httpClient.get<Movie>(AppSettings.getApiUrl('movie/'+id)+param);
  }

  getTrendingsMovies() {
    return this.httpClient.get<MovieSearch>(AppSettings.getApiUrl('trending/movie/week'));
  }

}
