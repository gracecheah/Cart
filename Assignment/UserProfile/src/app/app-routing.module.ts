import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { SignupPageComponent } from "./signup-page/signup-page.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupPageComponent },
  { path: "users/:userid", component: UserDetailsComponent },
  { path: "", component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
