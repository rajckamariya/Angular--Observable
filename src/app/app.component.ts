import { Component, OnDestroy, OnInit, VERSION } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivate = false;
  private subscription: Subscription;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.subscription = this.userService.activateEmitter.subscribe(
      (didActivated: boolean) => {
        this.userActivate = didActivated;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
