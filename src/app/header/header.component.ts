import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() isNav: EventEmitter<boolean> = new EventEmitter<boolean>();
  togglerMenu = false;
  onToggleNav() {
    this.togglerMenu = !this.togglerMenu;
    this.isNav.emit(this.togglerMenu);
  }
}
