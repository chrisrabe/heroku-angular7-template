import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {finalize} from "rxjs/operators";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: any;

  private subscription: Subscription;

  constructor (private httpClient: HttpClient) {
  }

  public ngOnInit(): void {
    this.httpClient.post('/api/main/helloworld', {arg1: 'Hello '})
      .pipe(finalize(() => this.subscription.unsubscribe()))
      .subscribe(res => {
          this.title = res;
      });
  }
}
