import { Component, input } from '@angular/core';
import { customers } from '../customer';
import { MenuCustomer } from "./menu-customer/menu-customer";
import { customerModel } from '../customer.model';

@Component({
  selector: 'app-menu',
  imports: [MenuCustomer],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  customers = customers;
  newData = input<customerModel[]>();
}
