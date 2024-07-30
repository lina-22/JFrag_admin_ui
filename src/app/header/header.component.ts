import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/auth_service/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  @Output() isNav: EventEmitter<boolean> = new EventEmitter<boolean>();
  togglerMenu = false;
  userName: string = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    // Subscribe to user details observable
    this.authenticationService.userDetails$.subscribe((userDetails) => {
      if (userDetails) {
        this.userName = userDetails.firstName;
      }
    });

    // Initialize userName if already logged in
    if (this.authenticationService.isLoggedIn()) {
      const userDetails = this.authenticationService.getUserDetails();
      if (userDetails) {
        this.userName = userDetails.firstName;
        this.router.navigate(['']);
      }
    }
  }

  logout() {
    this.authenticationService.logout();
    this.userName = '';
    this.router.navigate(['sign-in']);
  }
  //----------
  onToggleNav() {
    this.togglerMenu = !this.togglerMenu;
    this.isNav.emit(this.togglerMenu);
  }
}
