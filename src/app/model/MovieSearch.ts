import { Movie } from "./Movie";

export interface MovieSearch {
    page: number;
    results: Array<Movie>;
    total_pages: number,
    total_results: number,
  }