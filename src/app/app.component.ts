import { Component } from '@angular/core';

@Component({
  //decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  sideNav = false;
  openSideNav($param: any) {
    this.sideNav = $param;
    console.log($param);
  }
  title = 'jfrag_admin_ui';
}
