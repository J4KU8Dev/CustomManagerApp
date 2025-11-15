import { Component } from '@angular/core';
import { customers } from '../customer';
import { MenuCustomer } from "./menu-customer/menu-customer";

@Component({
  selector: 'app-menu',
  imports: [MenuCustomer],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  customers = customers;
  
}
