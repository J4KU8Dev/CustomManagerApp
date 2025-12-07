import { Component, inject, signal } from '@angular/core';
import { OptionsMenu } from "../options-menu/options-menu";
import { Menu } from "../menu/menu";
import { customerModel } from '../customer.model';
import { customers as initialCustomers } from '../customer';
import { CustomerStore } from '../customer-store';
@Component({
  selector: 'app-dashboard',
  imports: [OptionsMenu, Menu],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  store = inject(CustomerStore)

  get customers() {
    return this.store.paginated();
  }

  onFilteredView(value: string) {
    this.store.updateSearch(value);
  }

  onAddCustomer(newCustomer: any) {
    this.store.addCustomer(newCustomer);
  }

  onCustomerUpdated(updated: any) {
    this.store.updateCustomer(updated);
  }

  onCustomerDeleted(deleted: any) {
    this.store.deleteCustomer(deleted);
  }
}
