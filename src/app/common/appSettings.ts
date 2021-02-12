import { environment } from '../../environments/environment';

export class AppSettings {
  public static apiURL =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    environment.movieDbAPIKey;
}