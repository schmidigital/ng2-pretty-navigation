import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { MenuAction } from './menu.action';
import { MenuComponent } from './menu.component';
import { MenuService } from './menu.service';
import { Topbar } from './topbar';
import { Sidebar } from './sidebar';

import { Observable } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule
  ],
  exports: [
    MenuComponent
  ],
  declarations: [
    MenuComponent,
    Topbar,
    Sidebar
  ],
  providers: [
    MenuAction,
    MenuService
  ],
})
export class MenuModule {
  constructor() {

  }
}
