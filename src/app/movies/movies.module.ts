import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailsMoviesComponent } from './details-movies/details-movies.component';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { FormsModule } from '@angular/forms';
import { AllmoviesComponent } from './allmovies/allmovies.component';
import { AlltvComponent } from './alltv/alltv.component';
import { DetailsTvComponent } from './details-tv/details-tv.component';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [ HomeComponent, DetailsMoviesComponent, AllmoviesComponent, AlltvComponent, DetailsTvComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule, 
    SharedModule,
    AuthModule,
    FormsModule,
    NgImageSliderModule
  ],
  exports:[
    HomeComponent, 
    DetailsMoviesComponent
  ]
})
export class MoviesModule { }
