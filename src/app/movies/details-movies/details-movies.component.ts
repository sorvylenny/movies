import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.css']
})
export class DetailsMoviesComponent implements OnInit{
 movie:any
  constructor(
    private movieService:MoviesService,
    private router:Router,
    private activerouter:ActivatedRoute,
 
   ) { }

   ngOnInit(): void {

    let movieId : any = this.activerouter.snapshot.paramMap.get('id')
    this.movieDetail (movieId)

  }

  movieDetail(id:number){
    this.movieService.movieDetail(id)
    .subscribe((data:any) => {
    this.movie = data;
    console.log(this.movie)
 
   })}
 
 allCharacters() {
 this.router.navigate(['/'])
 
   }
}
