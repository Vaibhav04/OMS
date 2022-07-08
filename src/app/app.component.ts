import { Component, OnInit, Output } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'OMS';
  loading = false;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe((routerEvent: any) =>
      this.checkRouterEvent(routerEvent)
    );
  }

  checkRouterEvent(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    } else if (
      event instanceof NavigationError ||
      event instanceof NavigationCancel ||
      event instanceof NavigationEnd
    ) {
      this.loading = false;
    }
  }
}
