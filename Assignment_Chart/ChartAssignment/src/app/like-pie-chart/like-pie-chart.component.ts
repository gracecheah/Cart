import { Component, OnInit } from "@angular/core";
import data from "../../data";

@Component({
  selector: "app-like-pie-chart",
  templateUrl: "./like-pie-chart.component.html",
  styleUrls: ["./like-pie-chart.component.css"]
})
export class LikePieChartComponent implements OnInit {
  chartType = "pie";
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
    let tagLikeCount = [];

    for (let like of data) {
      for (let i = 0; i < like.tags.length; i++) {
        if (!tagLikeCount[like.tags[i]]) {
          tagLikeCount[like.tags[i]] = 0;
        }
        tagLikeCount[like.tags[i]] += like.likes;
      }
    }

    this.chartLabels = Object.keys(tagLikeCount);
    for (let tag of Object.keys(tagLikeCount)) {
      dataset.push(tagLikeCount[tag]);
    }

    this.chartData.push({ data: dataset });
  }
}
