import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { TutorialModel } from '../../models/tutorial.modal';
import { TutorialService } from '../../services/tutorial.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public tutorials: TutorialModel[];

  private listSubscription: Subscription;

  constructor(private tutorialService: TutorialService) { }

  public ngOnInit() {
    this.listSubscription = this.tutorialService.postList({})
      .pipe(finalize(() => this.listSubscription.unsubscribe()))
      .subscribe(tutorials => {
        this.tutorials = tutorials;
      });
  }

}
