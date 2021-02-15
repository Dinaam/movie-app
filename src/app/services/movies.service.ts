import { Injectable } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';  
import { HttpClient } from '@angular/common/http';
import{ AppSettings } from '../common/appSettings';
import { MovieSearch } from '../model/MovieSearch';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  
  
  constructor(private httpClient: HttpClient) { }

  getMovie(name:String){
    let param = '&language=fr-FR&page=1&include_adult=false&query='+name
    return this.httpClient.get<MovieSearch>(AppSettings.getApiUrl('search/movie')+param);
  }

  getTrendingsMovies() {
    return this.httpClient.get<MovieSearch>(AppSettings.getApiUrl('trending/movie/week'));
  }

}
