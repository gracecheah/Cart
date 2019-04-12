import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MiscService {
  private isElementRed = false;
  isElementBlue = false;

  constructor() {}

  getIsElementRed() {
    return this.isElementRed;
  }

  changeToRed() {
    this.isElementRed = true;
  }

  changeToBlue() {
    this.isElementBlue = true;
  }
}
