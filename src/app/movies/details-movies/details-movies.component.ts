import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.css']
})
export class DetailsMoviesComponent implements OnInit{
 movie:any;
  constructor(
    private movieService:MoviesService,
    private router:Router,
    private activerouter:ActivatedRoute,
    ) { }

   ngOnInit(): void {
    let movieId : any = this.activerouter.snapshot.paramMap.get('id')
    this.movieDetail (movieId)
  }

/* Fetches movie details by ID */
movieDetail(id: number) {
  this.movieService.movieDetail(id)
    .subscribe((data: any) => {
      this.movie = data;
    });
}

/* Calculates movie duration in hours and minutes */
calculateDuration(): { hours: number, minutes: number } {
  const hours = Math.floor(this.movie?.runtime / 60);
  const minutes = this.movie?.runtime % 60;
  return { hours, minutes };
}

 
 allCharacters() {
  this.router.navigate(['/'])
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
  
  getImageUrlProduct(logo_path: string): string {
    const image: string = '/assets/Image_not_available.png';
    if (!logo_path || logo_path.toLowerCase() === 'null' || logo_path.trim() === '') {
      // Si no hay poster_path o es 'null' o está vacío, devuelve la imagen predeterminada
      return 'assets/Image_not_available.jpg';
      
    } else {

      return 'https://image.tmdb.org/t/p/w500'+ logo_path;
    }
      
  }
  
}
