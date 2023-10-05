import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movies, Result } from '../interface/movie';
import { Router, RouterEvent } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
playingMovie: Result[]=[];

constructor(private movieService: MoviesService, private router:Router){}
page:number= 1


ngOnInit(): void {
    this.allMovies(this.page);
  }

allMovies(page:number){
  this.movieService.moviesAll(this.page)
      .subscribe((movies:any)=>{
        console.log(movies)
        this.playingMovie= movies.results;
         console.log("this is the movies",this.playingMovie);
      })
}

previousPage(page:number){
 if(page === 1){
  return ;
 }
this.allMovies (this.page = page-1)
}
nextPage(page:number){
  this.allMovies (this.page = page+1)
  }
 
  directPageOne(page:number){
    this.allMovies(this.page= page)
  }

  directPageTwo(page:number){
    this.allMovies(this.page= page+1)
  }
  directPageTree(page:number){
    this.allMovies(this.page= page+2)
  }

  movieDetails(id: number) {

    this.router.navigate(['detailsMovie',id])
    
      }


}
