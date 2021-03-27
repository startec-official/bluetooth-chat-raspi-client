import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-chat-demo';
  public messages: any[];

  ngOnInit(): void {
    this.messages = [
      { msg: 'hello there', self: false },
      { msg: 'oh hi', self: true }
    ];
  }

  addMessage(newMessage: string) {
    this.messages.push({msg: newMessage, self: true});
  }
}
