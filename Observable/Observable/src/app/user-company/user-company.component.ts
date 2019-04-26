import { Component, OnInit } from "@angular/core";
import { UserServiceService } from "../user-service.service";

@Component({
  selector: "app-user-company",
  templateUrl: "./user-company.component.html",
  styleUrls: ["./user-company.component.css"]
})
export class UserCompanyComponent implements OnInit {
  constructor(private userServiceService: UserServiceService) {}
  users = null;
  ngOnInit() {
    this.getUserCompany();
  }

  getUserCompany() {
    this.userServiceService.getUsersData().subscribe(response => {
      this.users = response;
    });
  }
}
