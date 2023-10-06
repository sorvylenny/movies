import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ImageData, Result } from '../interface/movie';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { NgImageSliderComponent } from 'ng-image-slider';
import { TvService } from '../services/tv.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

movieResult: Result[]=[];
page:number= 1;
searchControl : string = '';
tvResult : Result[]=[]
imgCollectionMovies: Array<object> = [];
imgCollectionTv: Array<object> = [];

constructor(private movieService: MoviesService, 
  private tvService: TvService, 
            private router:Router,
           ) {}   

ngOnInit(): void {
    this.moviesSlider(this.page);
    this.tvSlider(this.page)
   
  }
/* Method that brings information from the movies service and pagination */
moviesSlider(page: number) {
  this.movieService.sliderMovies(page)
    .subscribe((movies: any) => {
      this.movieResult = movies.results;
      this.imgCollectionMovies = this.movieResult.map((movie: any) => ({
        image: this.getImageUrl(movie.backdrop_path),
        thumbImage: this.getImageUrl(movie.backdrop_path),
        alt: movie.title, 
        title: movie.title, 
        movieId:movie.id,  
        
      }));
      
    });
}

tvSlider(page: number) {
  this.tvService.sliderTV(page)
    .subscribe((tv: any) => {
      this.tvResult = tv.results;
      this.imgCollectionTv = this.tvResult.map((tv: any) => ({
        image: this.getImageUrl(tv.backdrop_path),
        thumbImage: this.getImageUrl(tv.backdrop_path),
        alt: tv.name, 
        title: tv.name, 
        movieId:tv.id,  
        
      }));
      
    });
}





  /* Method to display the image */
getImageUrl(backdrop_path: string):string{
 if (!backdrop_path || backdrop_path.toLowerCase() === 'null' || backdrop_path.trim() === '') {
   return 'assets/Image_not_available.jpg';
 } else {
   return 'https://image.tmdb.org/t/p/w500' + backdrop_path;
 }
}
// manejador de evento click en Slider Movies 
handleImageClickMovie(index: number) {
  const clickedImage:ImageData = this.imgCollectionMovies[index];
  const movieId = clickedImage.movieId;

 
  this.router.navigate(['detailsMovie', movieId]);
 }

 handleImageClickTv(index: number) {
  const clickedImage:ImageData = this.imgCollectionMovies[index];
  const tvId = clickedImage.movieId;
 this.router.navigate(['detailsTv', tvId]);
 }
}




