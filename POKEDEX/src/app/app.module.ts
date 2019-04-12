import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokemonPageComponent } from "./pokemon-page/pokemon-page.component";
import { GeneralInfoComponent } from "./general-info/general-info.component";
import { EvolutionInfoComponent } from "./evolution-info/evolution-info.component";
import { MovesetInfoComponent } from "./moveset-info/moveset-info.component";
import { FooterComponent } from "./footer/footer.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PokemonPageComponent,
    GeneralInfoComponent,
    EvolutionInfoComponent,
    MovesetInfoComponent,
    FooterComponent,
    PokemonListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
