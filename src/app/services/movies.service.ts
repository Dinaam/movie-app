import { Injectable } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';  
import { HttpClient } from '@angular/common/http';
import{ AppSettings } from '../common/appSettings';
import { Movie } from '../model/Movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  constructor(private httpClient: HttpClient) { }

  getMovie(name:String){
    let param = '&language=fr-FR&page=1&include_adult=false&query='+name
    return this.httpClient.get<Movie>(AppSettings.apiURL+param);
  }

}
