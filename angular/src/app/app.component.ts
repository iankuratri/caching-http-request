import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, interval } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private todo$: Observable<any>;
  private todoSub: Subscription;

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this.fetchTodo();

    this.todoSub = this.todo$.subscribe((todo) => {
      console.log('todo from sub:', todo);
    });
  }

  // fetchTodo() {
  //   this._http
  //     .get('https://jsonplaceholder.typicode.com/todos/1')
  //     .subscribe((res: any) => {
  //       console.log('response from API', res);
  //     });
  // }

  fetchTodo() {
    console.log('fetchTodo called');

    if (!this.todo$) {
      this.todo$ = this._http
        .get('https://jsonplaceholder.typicode.com/todos/1')
        .pipe(shareReplay(1));
    }
  }

  ngOnDestroy() {
    if (this.todoSub) this.todoSub.unsubscribe();
  }
}
