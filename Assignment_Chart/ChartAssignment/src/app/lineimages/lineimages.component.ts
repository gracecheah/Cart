import { Component, OnInit } from "@angular/core";
import data from "../../data";

@Component({
  selector: "app-lineimages",
  templateUrl: "./lineimages.component.html",
  styleUrls: ["./lineimages.component.css"]
})
export class LineimagesComponent implements OnInit {
  chartType = "line";
  chartData = [];
  chartLabels = [];

  constructor() {}

  ngOnInit() {
    // {
    //   albumId: 1,
    //   id: 1,
    //   title: "accusamus beatae ad facilis cum similique qui sunt",
    //   url: "https://via.placeholder.com/600/92c952",
    //   thumbnailUrl: "https://via.placeholder.com/150/92c952",
    //   dateAdded: "Sat May 19 2018 18:46:20 GMT+0800 (Malaysia Time)",
    //   tags: ["fails", "news", "sad"],
    //   likes: 38
    // },

    let dataset = [];
    let monthCount = [];

    for (let num of data) {
      let date = new Date(num.dateAdded);
      let month = date.getMonth();
      console.log(month);
      if (!monthCount[month]) {
        monthCount[month] = 0;
      }
      monthCount[month] += 1;
    }

    this.chartLabels = Object.keys(monthCount);

    for (let month of Object.keys(monthCount)) {
      dataset.push(monthCount[month]);
    }

    this.chartData.push({ data: dataset });
  }
}
