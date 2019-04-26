import { Component, OnInit } from "@angular/core";
import { UserServiceService } from "../user-service.service";

@Component({
  selector: "app-user-location",
  templateUrl: "./user-location.component.html",
  styleUrls: ["./user-location.component.css"]
})
export class UserLocationComponent implements OnInit {
  constructor(private userServiceService: UserServiceService) {}

  users = null;
  ngOnInit() {
    this.getUserLocation();
  }
  getUserLocation() {
    this.userServiceService.getUsersData().subscribe(response => {
      this.users = response;
    });
  }
}
