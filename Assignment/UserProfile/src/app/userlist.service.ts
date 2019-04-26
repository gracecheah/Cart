import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

// const usersUrl = "https://tranquil-beach-87956.herokuapp.com/api/v1/users";
// const userProfileUrl =
// "https://tranquil-beach-87956.herokuapp.com/api/v1/images?userId";

const baseUrl = "https://insta.nextacademy.com/api/v1";
const userProfileUrl = "https://insta.nextacademy.com/api/v1/images?userId";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

const signedInHttpOptions = authToken => {
  return {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + authToken
    })
  };
};

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  auth_token: string;
  message: string;
  status: string;
  user: BackendUser;
}

interface SignupData {
  username: string;
  email: string;
  password: string;
}

interface SignupResponse {
  auth_token: string;
  message: string;
  status: string;
  user: BackendUser;
}

interface BackendUser {
  id: number;
  profile_picture: string;
  username: string;
}

@Injectable({
  providedIn: "root"
})
export class UserlistService {
  constructor(private http: HttpClient) {}

  getUsersService() {
    return this.http.get(`${baseUrl}/users`);
  }

  getUserImages(userId: number) {
    return this.http.get(`${baseUrl}/images?userId=${userId}`);
  }

  getuserProfileUrl(userid) {
    return this.http.get(userProfileUrl + `=${userid}`);

    // getUserImages(userId: number) {
    // return this.http.get(`${baseUrl}/images?userId=${userId}`)
    // }
  }

  getMyImages() {
    const url = `${baseUrl}/images/me/`;
    const authToken = localStorage.getItem("authToken");
    const options = signedInHttpOptions(authToken);

    this.http.get(url, options).subscribe(response => {
      console.log(response);
    });
  }

  submitSignUp(data: SignupData) {
    const url = `${baseUrl}/users/`;
    const params = data;

    this.http.post(url, params, httpOptions).subscribe(response => {
      const responseData = response as SignupResponse;
      console.log(responseData.user.id);
      localStorage.setItem("authToken", responseData.auth_token);
    });
  }

  login(data: LoginData) {
    const url = `${baseUrl}/login`;
    const params = data;

    this.http.post(url, params, httpOptions).subscribe(response => {
      const responseData = response as LoginResponse;
      localStorage.setItem("authToken", responseData.auth_token);
    });
  }
}
