import { Component, OnInit } from "@angular/core";
import { UserlistService } from "../userlist.service";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})
export class HomepageComponent implements OnInit {
  userList = null;
  constructor(private userlistService: UserlistService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userlistService.getUsersService().subscribe(response => {
      this.userList = response;
    });
  }
}
