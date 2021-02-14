import { environment } from '../../environments/environment';

export class AppSettings {
  public static apiURL =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    environment.movieDbAPIKey;
  public static TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p/';
}