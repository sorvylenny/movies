import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailsMoviesComponent } from './details-movies/details-movies.component';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';


@NgModule({
  declarations: [ HomeComponent, DetailsMoviesComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule, 
    SharedModule,
    AuthModule
  ],
  exports:[
    HomeComponent, 
    DetailsMoviesComponent
  ]
})
export class MoviesModule { }
