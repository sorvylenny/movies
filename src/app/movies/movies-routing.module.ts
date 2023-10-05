import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsMoviesComponent } from './details-movies/details-movies.component';

const routes: Routes = [
  {path:'',component: HomeComponent},   
  {path: 'detailsMovie/:id', component: DetailsMoviesComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
