import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private socket: Socket) { }

  getMessage() {
    return this.socket.fromEvent('chat message').pipe(
      map(data => data.toString())
      );
  }

  sendMessage(message: string) {
    this.socket.emit("reply-message", message);
  }
}
