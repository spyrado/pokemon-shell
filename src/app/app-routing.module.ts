import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  { path: 'pokemons', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'pokemons/:pokemonName', loadChildren: () => import('pokemonMfeProfile/Module').then(m => m.AppModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
