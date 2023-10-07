import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { Movies, Result } from "../interface/movie";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  private baseUrl: string = environment.baseUrl;
  private token: string = environment.token;

  constructor(private http: HttpClient) {}

  /**
 * Retrieves a list of movies currently playing in theaters.
 * @param page Page number for pagination.
 * @returns Observable of Result[] containing movie information.
 */

  moviesAll(page: number): Observable<Result[]> {
    const url = `${this.baseUrl}/movie/now_playing?language=en-US&page=` + page;
    const singedToken = this.token;
    if (singedToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${singedToken}`
      });
      return this.http.get<Result[]>(url, { headers });
    } else {
      return of([]);
    }
  }

  /**
 * Retrieves a list of popular movies.
 * @param page Page number for pagination.
 * @returns Observable of Result[] containing movie information.
 */
  sliderMovies(page: number): Observable<Result[]> {
    const url = `${this.baseUrl}/movie/popular?language=en-US&page=1` + page;
    const singedToken = this.token;
    if (singedToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${singedToken}`
      });
      return this.http.get<Result[]>(url, { headers });
    } else {
      return of([]);
    }
  }
/**
 * Retrieves detailed information about a specific movie.
 * @param id Movie ID.
 * @returns Observable of Result[] containing movie information.
 */
  movieDetail(id: number): Observable<Result[]> {
    const url = `${this
      .baseUrl}/movie/${id}?&include_adult=false&language=en-US&page=1`;
    const singedToken = this.token;
    if (singedToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${singedToken}`
      });
      return this.http.get<Result[]>(url, { headers });
    } else {
      return of([]);
    }
  }
/**
 * Searches for movies based on the provided query.
 * @param query Search query for movies.
 * @returns Observable of Result[] containing movie search results.
 */
  searchMovie(query: string): Observable<Result[]> {
    const url = `${this.baseUrl}/search/movie`;

    const params = new HttpParams()
      .set("query", query)
      .set("include_adult", "false")
      .set("language", "en-US")
      .set("page", "1");

    const singedToken = this.token;

    const headers = new HttpHeaders({
      accept: "application/json",
      Authorization: `Bearer ${singedToken}`
    });
    const options = {
      headers,
      params
    };
    console.log(url);
    return this.http.get<Result[]>(url, options);
  }
}
