import { Component, ElementRef, OnInit } from "@angular/core";
import { Result } from "../interface/movie";
import { MoviesService } from "../services/movies.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-allmovies",
  templateUrl: "./allmovies.component.html",
  styleUrls: ["./allmovies.component.css"]
})
export class AllmoviesComponent implements OnInit {
  playingMovie: Result[] = [];
  page: number = 1;
  searchControl: string = "";

  constructor(
    private movieService: MoviesService,
    private router: Router,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.allMovies(this.page);
  }
  /* Method that brings information from the movies service and pagination */
  allMovies(page: number) {
    this.movieService.moviesAll(this.page).subscribe((movies: any) => {
      this.playingMovie = movies.results;
    });
  }
  /* Method information from the search movies service */
  searchForName() {
    if (this.searchControl && this.searchControl.trim() !== '') {
    this.movieService
      .searchMovie(this.searchControl)
      .subscribe((search: any) => {
        this.playingMovie = search.results;
      });
    }
  }

  /*Pagination method the previous*/
  previousPage(page: number) {
    if (page === 1) {
      this.scrollToTop();
      return;
    }
    this.allMovies((this.page = page - 1));
  }
  /*Pagination method the next*/
  nextPage(page: number) {
    this.allMovies((this.page = page + 1));
    this.scrollToTop()     
  }
  /* Methods to capture page addresses */
  directPageOne(page: number) {
    this.allMovies((this.page = page));
    this.scrollToTop()    
  }

  directPageTwo(page: number) {
    this.allMovies((this.page = page + 1));
    this.scrollToTop()     
  }
  directPageTree(page: number) {
    this.allMovies((this.page = page + 2));
    this.scrollToTop()  
  }
  /* Method to browse the movie id and see more information about it */
  movieDetails(id: number) {
    this.router.navigate(["detailsMovie", id]);
  }
  /* Method to display the image */
  getImageUrl(poster_path: string): string {
    if (
      !poster_path ||
      poster_path.toLowerCase() === "null" ||
      poster_path.trim() === ""
    ) {
      return "assets/Image_not_available.jpg";
    } else {
      return "https://image.tmdb.org/t/p/w500" + poster_path;
    }
  }
  /* ScrollToTop function scrolls the browser window */
  private scrollToTop() {
    const targetElement = this.elementRef.nativeElement;
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth"
    });
  } 
}
