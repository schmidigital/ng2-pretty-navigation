import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() { }

  scrollTop() {
    jQuery('#st-content')[0].scrollTop = 0;
  }
}
