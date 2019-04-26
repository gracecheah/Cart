import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { UserlistService } from "../userlist.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl("")
  });

  constructor(private service: UserlistService) {}

  ngOnInit() {}

  onSubmit() {
    const data = this.loginForm.value;
    this.service.login(data);
  }
}
