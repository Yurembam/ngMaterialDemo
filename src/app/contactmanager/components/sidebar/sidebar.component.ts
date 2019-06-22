import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  matcher: MediaQueryList;

  private mediaMatcherQuery: string = `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`;

  constructor(public mediaMatcher: MediaMatcher) { }

  ngOnInit() {
    this.matcher = this.mediaMatcher.matchMedia(this.mediaMatcherQuery);
    //this.matcher.addListener(this.myListener);
  }

  ngOnDestroy() {
    //this.matcher.removeListener(this.myListener);
  }

  // myListener(event) {
  //   console.log(event.matches ? 'match' : 'no match');
  // }

  isScreenSmall(): boolean {
    return this.matcher.matches;
  }
}
