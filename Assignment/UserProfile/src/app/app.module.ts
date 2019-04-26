import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { HttpClientModule } from "@angular/common/http";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { SignupPageComponent } from "./signup-page/signup-page.component";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserDetailsComponent,
    SignupPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
