import { Component, OnInit } from "@angular/core";
import { MiscService } from "../misc.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  constructor(private miscService: MiscService) {}

  ngOnInit() {}

  changeRed() {
    this.miscService.changeToRed();
  }

  changeBlue() {
    this.miscService.changeToBlue();
  }
}
