import { Injectable } from "@angular/core";
import * as socketio from "socket.io-client";
import { BehaviorSubject } from "rxjs";

const SERVER_URL =
  "https://lirenyeo-react-group-chat-socket-io-server-1.glitch.me/";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  socket = null;
  username: string = "GC";
  messages = new BehaviorSubject<Object[]>([]);
  users = new BehaviorSubject<Object[]>([]);
  constructor() {
    if (!this.socket) {
      // create socket connection
      this.socket = socketio(SERVER_URL);
    }
    // send data
    this.socket.emit("NEW_USER");

    // receive data
    this.socket.on("GET_CURRENT_USER", newUser => {
      this.username = newUser.username;
    });

    this.socket.on("UPDATE_USER_LIST", users => {
      this.users.next(users);
    });

    this.socket.on("RECEIVE_BROADCAST", message => {
      const currentMessages = this.messages.getValue();
      currentMessages.push(message);
      this.messages.next(currentMessages);
    });
  }

  getUsers() {
    return this.users;
  }

  getMessages() {
    return this.messages;
  }

  sendMessage(text: string) {
    const message = {
      username: this.username,
      message: text,
      timestamp: Date.now()
    };
    console.log(message);
    this.socket.emit("BROADCAST_MESSAGE", message);
  }
}
