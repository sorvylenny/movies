import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllmoviesComponent } from './allmovies/allmovies.component';
import { AlltvComponent } from './alltv/alltv.component';
import { DetailsMoviesComponent } from './details-movies/details-movies.component';
import { DetailsTvComponent } from './details-tv/details-tv.component';
import { HomeComponent } from './home/home.component';

import { AuthModule } from '../auth/auth.module';
import { FormsModule } from '@angular/forms';
import { MoviesRoutingModule } from './movies-routing.module';
import { NgImageSliderModule } from 'ng-image-slider';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ 
    AllmoviesComponent, 
    AlltvComponent, 
    DetailsMoviesComponent, 
    DetailsTvComponent,
    HomeComponent 
  ],
  imports: [
    CommonModule,
    AuthModule,
    FormsModule,
    MoviesRoutingModule, 
    NgImageSliderModule,
    SharedModule,
  ],
  exports:[
    HomeComponent, 
    DetailsMoviesComponent
  ]
})
export class MoviesModule { }
