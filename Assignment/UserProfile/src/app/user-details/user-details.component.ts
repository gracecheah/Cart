import { Component, OnInit, Input } from "@angular/core";
import { UserlistService } from "../userlist.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"]
})
export class UserDetailsComponent implements OnInit {
  @Input() users = null;

  constructor(
    private userlistService: UserlistService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userlistService
      .getuserProfileUrl(this.route.snapshot.params.userid)
      .subscribe(response => {
        this.users = response;
      });
  }
}
