import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { MatSidenav } from '@angular/material';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  matcher: MediaQueryList;
  private mediaMatcherQuery: string = `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`;
  users: Observable<User[]>;
  isDarkTheme: boolean = false;
  dir: string = 'ltr';

  constructor(public mediaMatcher: MediaMatcher,
    private userService: UserService) { }

  @ViewChild(MatSidenav, { static: false }) sidenav: MatSidenav;

  ngOnInit() {
    this.matcher = this.mediaMatcher.matchMedia(this.mediaMatcherQuery);
    //this.matcher.addListener(this.myListener);
    this.users = this.userService.users;
    this.userService.loadAll();
  }

  ngOnDestroy() {
    //this.matcher.removeListener(this.myListener);
  }

  // myListener(event) {
  //   console.log(event.matches ? 'match' : 'no match');
  // }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDir() {
    this.dir = this.dir == 'ltr' ? 'rtl' : 'ltr';
    this.sidenav.toggle().then(() => this.sidenav.toggle());
  }

  isScreenSmall(): boolean {
    return this.matcher.matches;
  }
}
