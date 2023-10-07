import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { ResultTv } from "../interface/tv.interface";


@Injectable({
  providedIn: "root"
})
export class TvService {
  private baseUrl: string = environment.baseUrl;
  private token: string = environment.token;

  constructor(private http: HttpClient) {}

  /**
 * Retrieves a list of movies currently playing in theaters.
 * @param page Page number for pagination.
 * @returns Observable of ResultTv[] containing Tv information.
 */
  
  tvAll(page: number): Observable<ResultTv[]> {
    const url = `${this.baseUrl}/tv/on_the_air?language=en-US&page=` + page;
    const singedToken = this.token;
    if (singedToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${singedToken}`
      });
      return this.http.get<ResultTv[]>(url, { headers });
    } else {
      return of([]);
    }
  }
/**
 * Retrieves detailed information about a specific tv.
 * @param id tv ID.
 * @returns Observable of ResultTv[] containing tv information.
 */
  tvDetail(id: number): Observable<ResultTv[]> {
    const url = `${this.baseUrl}/tv/${id}?language=en-US`;
    const singedToken = this.token;
    if (singedToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${singedToken}`
      });
      return this.http.get<ResultTv[]>(url, { headers });
    } else {
      return of([]);
    }
  }
/**
 * Searches for tv based on the provided query.
 * @param query Search query for tv.
 * @returns Observable of ResultTv[] containing tv search ResultTvs.
 */
  searchTv(query: string): Observable<ResultTv[]> {
    const url = `${this.baseUrl}/search/tv`;

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
    return this.http.get<ResultTv[]>(url, options);
  }
/**
 * Retrieves a list of popular tv.
 * @param page Page number for pagination.
 * @returns Observable of ResultTv[] containing movie information.
 */
  sliderTV(page: number): Observable<ResultTv[]> {
    const url = `${this.baseUrl}/tv/popular?language=en-US&page=1` + page;
    const singedToken = this.token;
    if (singedToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${singedToken}`
      });
      return this.http.get<ResultTv[]>(url, { headers });
    } else {
      return of([]);
    }
  }
}
