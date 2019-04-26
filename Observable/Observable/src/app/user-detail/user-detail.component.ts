import { Component, OnInit } from "@angular/core";
import { UserServiceService } from "../user-service.service";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {
  users = null;
  constructor(private userServiceService: UserServiceService) {}

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.userServiceService.getUsersData().subscribe(response => {
      this.users = response;
    });
  }
}
