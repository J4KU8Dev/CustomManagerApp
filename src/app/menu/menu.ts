import { Component, input, output } from '@angular/core';
import { customerModel } from '../customer.model';
import { MenuCustomer } from "./menu-customer/menu-customer";

@Component({
  selector: 'app-menu',
  imports: [MenuCustomer],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  customers = input.required<customerModel[]>();
  updatedCustomer = output<customerModel>(); 
  deletedCustomer = output<customerModel>();

  onCustomerUpdated(updated: customerModel) {
    this.updatedCustomer.emit(updated);
  }
  onCustomerDeleted(deleted: customerModel) {
    this.deletedCustomer.emit(deleted);
    // console.log(deleted);
  }
}
