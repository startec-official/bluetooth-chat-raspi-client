import { Component, OnInit } from '@angular/core';
import { DataService } from './utils/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-chat-demo';
  public messages: any[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.messages = [
      { msg: 'hello there', self: false },
      { msg: 'oh hi', self: true }
    ];

    this.dataService.getMessage().subscribe(newMessage => {
      this.addMessage(newMessage, false);
    });
  }

  addMessage(newMessage: string, self?: boolean) {
    if(!!self)
      self = true;
    this.messages.push({msg: newMessage, self: self});
  }
}
