import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private socket: Socket) { }

  getMessage() {
    return this.socket.fromEvent('message').pipe(
      tap(data => console.log(data)),
      map(data => data.toString())
      );
  }

  sendMessage(message: string) {
    this.socket.emit('message', message);
  }
}
