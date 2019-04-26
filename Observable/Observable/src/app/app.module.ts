import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserLocationComponent } from "./user-location/user-location.component";
import { UserCompanyComponent } from "./user-company/user-company.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UserLocationComponent,
    UserCompanyComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
