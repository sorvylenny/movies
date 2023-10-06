import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsMoviesComponent } from './details-movies/details-movies.component';
import { AllmoviesComponent } from './allmovies/allmovies.component';
import { AlltvComponent } from './alltv/alltv.component';
import { DetailsTvComponent } from './details-tv/details-tv.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'allMovies', component: AllmoviesComponent },
  { path: 'detailsMovie/:id', component: DetailsMoviesComponent },
  { path: 'allTv', component: AlltvComponent },
  { path: 'detailsTv/:id', component: DetailsTvComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
