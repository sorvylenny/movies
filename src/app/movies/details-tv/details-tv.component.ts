import { Component } from '@angular/core';
import { TvService } from '../services/tv.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-tv',
  templateUrl: './details-tv.component.html',
  styleUrls: ['./details-tv.component.css']
})
export class DetailsTvComponent {


  tv:any;
  constructor(
    private tvService:TvService,
    private router:Router,
    private activerouter:ActivatedRoute,
    ) { }

   ngOnInit(): void {
    let tvId : any = this.activerouter.snapshot.paramMap.get('id')
    this.tvDetail (tvId)
  }
  /* Fetches TV show details by ID */
  tvDetail(id:number){
    this.tvService.tvDetail(id)
    .subscribe((data:any) => {
    this.tv = data;
   
   });
  }

 /* Navigates to the home page */
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
