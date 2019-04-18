import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// const usersUrl = "https://tranquil-beach-87956.herokuapp.com/api/v1/users";
// const userProfileUrl =
// "https://tranquil-beach-87956.herokuapp.com/api/v1/images?userId";

const usersUrl = "https://insta.nextacademy.com/api/v1/users";
const userProfileUrl = "https://insta.nextacademy.com/api/v1/images?userId";

@Injectable({
  providedIn: "root"
})
export class UserlistService {
  constructor(private http: HttpClient) {}

  getUsersService() {
    return this.http.get(usersUrl);
  }

  getuserProfileUrl(userid) {
    return this.http.get(userProfileUrl + `=${userid}`);
  }
}
