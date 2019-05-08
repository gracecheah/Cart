import { Component, OnInit } from "@angular/core";
import data from "../../data";
@Component({
  selector: "app-imagestag",
  templateUrl: "./imagestag.component.html",
  styleUrls: ["./imagestag.component.css"]
})
export class ImagestagComponent implements OnInit {
  chartType = "pie";
  chartData = [];
  chartLabels = [];

  constructor() {}

  ngOnInit() {
    let dataset = [];
    let tagLikeCount = [];

    for (let like of data) {
      for (let i = 0; i < like.tags.length; i++) {
        if (!tagLikeCount[like.tags[i]]) {
          tagLikeCount[like.tags[i]] = 0;
        }
        tagLikeCount[like.tags[i]] += 1;
      }
    }



    this.chartLabels = Object.keys(tagLikeCount);
    for (let tag of Object.keys(tagLikeCount)) {
      dataset.push(tagLikeCount[tag]);
    }

    this.chartData.push({ data: dataset });
  }
}
