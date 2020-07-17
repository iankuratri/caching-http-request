import { Component } from '@angular/core';
import { HttpClientService } from './http-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _http: HttpClientService) {}

  fetchTodo() {
    this._http
      .get({
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        cacheMins: 1,
      })
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
