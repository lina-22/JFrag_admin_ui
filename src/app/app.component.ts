import { Component, HostListener } from '@angular/core';

@Component({
  //decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  sideNav = window.innerWidth <= 992 ? false : true;

  openSideNav($param: any) {
    this.sideNav = $param;
    console.log($param);
  }
  title = 'jfrag_admin_ui';

  @HostListener('window:resize', ['$event'])
  onResize($event: any) {
    const screenWidth = window.innerWidth;
    // Define your logic here based on screen width reduction
    if (screenWidth <= 992) {
      this.sideNav = false;
    } else {
      this.sideNav = true;
    }
  }
}
