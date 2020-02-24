import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  // Should the collapsed nav show?
  showNav: boolean;

  constructor(
    private router: Router,
    private titleService: Title,
    public authService: AuthService
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.getTitle(router.routerState, router.routerState.root)[0]) {
          this.titleService.setTitle(`O365 | ${this.getTitle(router.routerState, router.routerState.root)[0]}`);
        }
      }
    });
  }

  ngOnInit(): void {
    this.showNav = false;
  }

  /**
   * get data
   * state: string | any, parent: string|any
   * return data array
   */
  getTitle(state: string | any, parent: string | any) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

  // Used by the Bootstrap navbar-toggler button to hide/show
  // the nav in a collapsed state
  toggleNavBar(): void {
    this.showNav = !this.showNav;
  }

  async signIn(): Promise<void> {
    await this.authService.signIn();
  }

  signOut(): void {
    this.authService.signOut();
  }
}
