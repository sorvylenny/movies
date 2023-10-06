import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result } from '../interface/movie';

@Injectable({
  providedIn: 'root'
})
export class TvService {
  private baseUrl : string = environment.baseUrl;
  private token: string = environment.token; 

  constructor(private http: HttpClient) { }

  tvAll(page:number):Observable<Result[]>{
  const url = `${this.baseUrl}/tv/on_the_air?language=en-US&page=`+ page;
  const singedToken = this.token;
  if (singedToken) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${singedToken}`,
    });
    return this.http.get<Result[]>(url, { headers });
      } else {
      return of([]);
    }
  }


  tvDetail(id:number):Observable<Result[]>{
    const url = `${this.baseUrl}/tv/${id}?language=en-US`
    const singedToken = this.token;
    if (singedToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${singedToken}`,
      });
      return this.http.get<Result[]>(url, { headers });
        } else {
        return of([]);
      }
    }

  searchTv(query: string):Observable<Result[]>{
    
    const url = `${this.baseUrl}/search/tv`
    
    const params = new HttpParams()
    .set('query', query)
    .set('include_adult', 'false')
    .set('language', 'en-US')
    .set('page', '1');
    
    const singedToken = this.token;
  
      const headers = new HttpHeaders({
        'accept': 'application/json',
        Authorization: `Bearer ${singedToken}`,
      });
      const options = {
        headers,
        params
      };
      console.log(url);
      return this.http.get<Result[]>(url, options);
      
    }

    sliderTV(page:number):Observable<Result[]>{
      const url = `${this.baseUrl}/tv/popular?language=en-US&page=1`+ page;
      const singedToken = this.token;
      if (singedToken) {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${singedToken}`,
        });
        return this.http.get<Result[]>(url, { headers });
          } else {
          return of([]);
        }
      }

}
