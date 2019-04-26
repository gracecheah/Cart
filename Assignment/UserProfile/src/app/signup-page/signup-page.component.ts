import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { UserlistService } from "../userlist.service";
@Component({
  selector: "app-signup-page",
  templateUrl: "./signup-page.component.html",
  styleUrls: ["./signup-page.component.css"]
})
export class SignupPageComponent implements OnInit {
  signupForm = new FormGroup({
    username: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl("")
  });

  constructor(private service: UserlistService) {}

  ngOnInit() {}

  onSubmit() {
    const data = this.signupForm.value;
    this.service.submitSignUp(data);
  }
}
