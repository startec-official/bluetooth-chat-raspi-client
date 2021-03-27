import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from './utils/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-chat-demo';
  public messages: { msg: string, self: boolean }[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.messages = [
      { msg: 'hello there', self: false },
      { msg: 'oh hi', self: true }
    ];

    this.dataService.getMessage().subscribe(newMessage => {
      this.addMessage(newMessage, false);
    });
  }

  sendMessage(message: string) {
    this.dataService.sendMessage(message);
    this.addMessage(message, true);
  }

  addMessage(newMessage: string, _self?: boolean) {
    if (!!_self)
      _self = true;
    this.messages.push({ msg: newMessage, self: _self });
  }
}
