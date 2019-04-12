import { Component, OnInit, Input } from "@angular/core";
import { MiscService } from "../misc.service";

interface ElementalType {
  name: string;
}

@Component({
  selector: "app-general-info",
  templateUrl: "./general-info.component.html",
  styleUrls: ["./general-info.component.css"]
})
export class GeneralInfoComponent implements OnInit {
  @Input() specificPokemon = null;
  @Input() currentlyHidden = true;
  isRed = false;
  id: number = 132;
  name: string = "Ditto";
  weight: number = 40;
  types: ElementalType[] = [
    {
      name: "Normal"
    },
    {
      name: "Fire"
    }
  ];

  constructor(private miscService: MiscService) {}

  ngOnInit() {}

  getElementIsRed() {
    this.miscService.getIsElementRed();
  }
}
