import { Component, Output } from '@angular/core';
import { MenuAction, menuActionType } from '../menu.action';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component ({
  selector: 'sd-topbar',
  template: require('./topbar.html'),
  styles: [require('./topbar.scss')]
})
export class Topbar {
    menuItems: any[];
    isHidden$: Observable<boolean>;
    isOpen$: Observable<boolean>;

    constructor(
      private store: Store<any>,
      private menuAction: MenuAction,
    ) {}


    ngOnInit() {
      this.isHidden$ = this.store.select(state => state.menu.isHidden);
      this.isOpen$ = this.store.select(state => state.menu.isOpen);
    }

    toggleMenu() {
      this.store.dispatch(this.menuAction.toggleMenu());
    }
}
