import { Component, OnInit, Input } from "@angular/core";

interface Evolution {
  name: string;
  image: string;
}

@Component({
  selector: "app-evolution-info",
  templateUrl: "./evolution-info.component.html",
  styleUrls: ["./evolution-info.component.css"]
})
export class EvolutionInfoComponent implements OnInit {
  @Input() currentlyHidden = true;
  evolutions: Evolution[] = [
    {
      name: "Ditto",
      image: "placeholder"
    },
    {
      name: "Mew",
      image: "placeholder"
    },
    {
      name: "Mewtwo",
      image: "placeholder"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
