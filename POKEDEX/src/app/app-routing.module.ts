import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonPageComponent } from "./pokemon-page/pokemon-page.component";

const routes: Routes = [
  { path: "pokemon/:pokemonName", component: PokemonPageComponent },
  { path: "", component: PokemonListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
