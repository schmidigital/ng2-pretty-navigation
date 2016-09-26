import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component ({
  selector: 'sd-sidebar',
  template: require('./sidebar.html'),
  styles: [require('./sidebar.scss')]
})

export class Sidebar {
    menu: any;
    menuItems: any[];

    constructor() {
    }
}