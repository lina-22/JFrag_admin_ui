import { Component } from '@angular/core';
import {
  faDashboard,
  faLocation,
  faShop,
  faBox,
  faMoneyBill,
  faChartBar,
  faContactBook,
  faHand,
  faTags,
  faRuler,
  faShoppingCart,
  faUser,
  faExchangeAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css',
})
export class SideNavComponent {
  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;
  faTags = faTags;
  faRuler = faRuler;
  faShoppingCart = faShoppingCart;
  faUser = faUser;
  faExchangeAlt = faExchangeAlt;

  onMenuClick() {
    console.log('menu clicked...');
  }
}
