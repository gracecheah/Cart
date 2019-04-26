import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ChatInputComponent } from "./chat-input/chat-input.component";
import { ChatViewComponent } from './chat-view/chat-view.component';
import { ChatUserComponent } from './chat-user/chat-user.component';

@NgModule({
  declarations: [AppComponent, ChatInputComponent, ChatViewComponent, ChatUserComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
