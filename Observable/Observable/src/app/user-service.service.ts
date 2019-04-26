import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

// const userApi = "https://jsonplaceholder.typicode.com/users";

@Injectable({
  providedIn: "root"
})
export class UserServiceService {
  private users: BehaviorSubject<any> = new BehaviorSubject([]);
  constructor(private http: HttpClient) {
    this.getUsersService().subscribe(response => {
      this.users.next(response);
    });
  }

  getUsersService() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  getUsersData() {
    return this.users;
  }
}
