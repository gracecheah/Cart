import { Component, OnInit } from "@angular/core";
import { ChatService } from "../chat.service";
@Component({
  selector: "app-chat-user",
  templateUrl: "./chat-user.component.html",
  styleUrls: ["./chat-user.component.css"]
})
export class ChatUserComponent implements OnInit {
  users = [];

  constructor(private service: ChatService) {}

  ngOnInit() {
    this.service.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
