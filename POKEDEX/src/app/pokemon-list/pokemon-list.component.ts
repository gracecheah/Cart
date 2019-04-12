import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.css"]
})
export class PokemonListComponent implements OnInit {
  pokemons = [];
  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.getPokemons();
  }

  // getPokemons() {
  //   this.pokemonService.getPokemons().subscribe(response => {
  //     this.pokemons = response.results.map(result => result.name);
  //   });
  // }

  getPokemons() {
    this.pokemonService.getPokemons().subscribe(response => {
      let pokemonResults = [];
      for (let pokemon of response.results) {
        pokemonResults.push(pokemon.name);
      }
      this.pokemons = pokemonResults;
    });
  }
}
