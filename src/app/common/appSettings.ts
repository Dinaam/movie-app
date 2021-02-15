import { environment } from '../../environments/environment';

export const TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p/';

export class AppSettings {

  public static apiURL =
    "https://api.themoviedb.org/3/";
  public static getApiUrl(chemin:string){
    return AppSettings.apiURL + chemin + '?language=fr-FR&api_key=' +environment.movieDbAPIKey;
  }
}