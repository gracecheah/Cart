import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ChartsModule } from "ng2-charts";
import { AppComponent } from "./app.component";
import { LikePieChartComponent } from "./like-pie-chart/like-pie-chart.component";
import { ImagestagComponent } from './imagestag/imagestag.component';
import { LineimagesComponent } from './lineimages/lineimages.component';

@NgModule({
  declarations: [AppComponent, LikePieChartComponent, ImagestagComponent, LineimagesComponent],
  imports: [BrowserModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
