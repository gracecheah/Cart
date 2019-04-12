import { Component, OnInit, Input } from "@angular/core";
import { MiscService } from "../misc.service";

interface Move {
  name: string;
  levelLearned: number;
  types: string[];
  power: number;
  accuracy: number;
  pp: number;
}

@Component({
  selector: "app-moveset-info",
  templateUrl: "./moveset-info.component.html",
  styleUrls: ["./moveset-info.component.css"]
})
export class MovesetInfoComponent implements OnInit {
  @Input() currentlyHidden = true;
  moves: Move[] = [
    {
      name: "Transform",
      levelLearned: 1,
      types: ["Normal"],
      power: 0,
      accuracy: 100,
      pp: 10
    },
    {
      name: "Mega Punch",
      levelLearned: 5,
      types: ["Normal"],
      power: 50,
      accuracy: 60,
      pp: 10
    }
  ];
  constructor(public miscService: MiscService) {}

  ngOnInit() {}
}
