import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { MenuAction } from './menu.action';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sd-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['./menu.style.scss', './menu.themes.scss'],
  // host: {'(window:scroll)': 'track($event)'}
})
export class MenuComponent implements OnInit {
  isOpen$: Observable<any>;
  previousTop: number;
  currentTop: number;
  scrollDelta: number;
  scrollOffset: number;
  scrolling: BehaviorSubject<boolean>;
  @ViewChild('stContent') stContent: ElementRef;
  @Input() effectNumber: number; 

  constructor(
    public store: Store<any>,
    public router: Router,
    private menuAction: MenuAction,
    private activatedRoute: ActivatedRoute
  ) {
    this.scrolling = new BehaviorSubject<boolean>(false);
    this.scrollOffset = 150;
    this.scrollDelta = 10;
  }

  ngOnInit() {
    this.isOpen$ = this.store.select(state => state.menu.isOpen);

    // close menu on route change
    this.router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe(res => {
      this.closeMenu();
    });
  }

  ngAfterViewInit() {
    this.scrolling.next(false);
    Observable.fromEvent(this.stContent.nativeElement, 'scroll')
    .withLatestFrom(this.scrolling)
    .subscribe((event) => {
        this.track(event);
    });
  }

  track(event) {
    if (!event[1]) {
      this.scrolling.next(true);

      if (!window.requestAnimationFrame) {
        this.currentTop = this.stContent.nativeElement.scrollTop();

        this.previousTop = this.currentTop;
        this.scrolling.next(false);
      } else {
        setTimeout(() => {
          this.currentTop = this.stContent.nativeElement.scrollTop;

          if (this.previousTop - this.currentTop > this.scrollDelta) {
            // if scrolling up...
            this.store.dispatch(this.menuAction.showMenu());
          } else if (this.currentTop - this.previousTop > this.scrollDelta
                      && this.currentTop > this.scrollOffset) {
            // if scrolling down...
            this.store.dispatch(this.menuAction.hideMenu());
          }

          this.previousTop = this.currentTop;
          this.scrolling.next(false);
        }, 250);
      }
    }
  }

  closeMenu() {
    this.store.dispatch(this.menuAction.closeMenu());
  }
}
