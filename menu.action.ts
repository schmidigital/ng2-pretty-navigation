import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

const ACTION_PREFIX = '[Menu]';
export const menuActionType = {
    OPEN_MENU: `${ACTION_PREFIX} Open Menu`,
    CLOSE_MENU: `${ACTION_PREFIX} Close Menu`,
    TOGGLE_MENU: `${ACTION_PREFIX} Toggle Menu`,
    SHOW_MENU: `${ACTION_PREFIX} Show Menu`,
    HIDE_MENU: `${ACTION_PREFIX} Hide Menu`,
};

@Injectable()
export class MenuAction {
    openMenu(): Action {
        return {
            type: menuActionType.OPEN_MENU,
        };
    }
    closeMenu(): Action {
        return {
            type: menuActionType.CLOSE_MENU,
        };
    }
    toggleMenu(): Action {
        return {
            type: menuActionType.TOGGLE_MENU,
        };
    }
    showMenu(): Action {
        return {
            type: menuActionType.SHOW_MENU,
        };
    }
    hideMenu(): Action {
        return {
            type: menuActionType.HIDE_MENU,
        };
    }
}
