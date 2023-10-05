import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movies, Result } from '../interface/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private baseUrl : string = environment.baseUrl;
  private token: string = environment.token; 

  constructor(private http: HttpClient) { }

  moviesAll(page:number):Observable<Result[]>{
  const url = `${this.baseUrl}/now_playing?language=en-US&page=`+ page;
  const singedToken = this.token;
  if (singedToken) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${singedToken}`,
    });
    console.log(url);
    return this.http.get<Result[]>(url, { headers });
      } else {
      return of([]);
    }
  }

  movieDetail(id:number):Observable<Result[]>{
    const url = `${this.baseUrl}/${id}?language=en-US`
    const singedToken = this.token;
    if (singedToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${singedToken}`,
      });
      console.log(url);
      return this.http.get<Result[]>(url, { headers });
        } else {
        return of([]);
      }
    }
}
