import { Component, ElementRef, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Result } from '../interface/movie';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

playingMovie: Result[]=[];
page:number= 1;
searchControl : string = '';

constructor(private movieService: MoviesService, 
            private router:Router,
            private elementRef: ElementRef ) {}   

ngOnInit(): void {
    this.allMovies(this.page);
  }
/* Method that brings information from the movies service and pagination */
allMovies(page:number){
  this.movieService.moviesAll(this.page)
      .subscribe((movies:any)=>{
          this.playingMovie= movies.results;  
        })
  }
  /* Method information from the search movies service */
  searchForName() {
    this.movieService.searchMovie(this.searchControl)
      .subscribe((search:any) => {
        this.playingMovie = search.results;
      });
  }
  
  /*Pagination method the previous*/
  previousPage(page:number){
   if(page === 1){
     this.scrollToTop();
    return ;
   }
  this.allMovies (this.page = page-1)
  }
  /*Pagination method the next*/
  nextPage(page:number){
    this.allMovies (this.page = page+1);
    this.scrollToTop();
  }
   /* Methods to capture page addresses */
  directPageOne(page:number){
    this.allMovies(this.page= page);
    this.scrollToTop();
  }

  directPageTwo(page:number){
    this.allMovies(this.page= page+1);
    this.scrollToTop();
  }
  directPageTree(page:number){
    this.allMovies(this.page= page+2);
    this.scrollToTop();
  }
  /* Method to browse the movie id and see more information about it */
  movieDetails(id: number) {
   this.router.navigate(['detailsMovie',id])
  }
  /* Method to display the image */
  getImageUrl(poster_path: string): string {
    if (!poster_path || poster_path.toLowerCase() === 'null' || poster_path.trim() === '') {
      // Si no hay poster_path o es 'null' o está vacío, devuelve la imagen predeterminada
      return 'assets/Image_not_available.jpg';
    } else {
      // Si hay un poster_path válido, devuelve la URL completa de la imagen
      return 'https://image.tmdb.org/t/p/w500' + poster_path;
    }
  }
  

  private scrollToTop() {
    const targetElement = this.elementRef.nativeElement; // Accede al elemento DOM actual
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth' // Desplazamiento suave
    });
  }
}


