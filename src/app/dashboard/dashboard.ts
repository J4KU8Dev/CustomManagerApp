import { Component, signal } from '@angular/core';
import { OptionsMenu } from "../options-menu/options-menu";
import { Menu } from "../menu/menu";
import { customerModel } from '../customer.model';
import { customers as initialCustomers } from '../customer';
@Component({
  selector: 'app-dashboard',
  imports: [OptionsMenu, Menu],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  master = signal<customerModel[]>([...initialCustomers]);
  displayed = signal<customerModel[]>([...initialCustomers]);

  onFilteredView(filtered: customerModel[]) {
    this.displayed.set(filtered);
  }

  onAddCustomer(newCustomer: customerModel) {
    this.master.update(list => [...list, newCustomer]);
    this.displayed.set(this.master());
  }

  onCustomerUpdated(updated: customerModel) {
    // console.log(typeof(updated))
    this.master.update(list => list.map(c => c.id === updated.id ? updated : c));
    this.displayed.update(list => list.map(c => c.id === updated.id ? updated : c));
  }
  onCustomerDeleted(deleted: customerModel) {
    this.master.update(list => list.filter(customer => customer.id !== deleted.id));
    this.displayed.update(list => list.filter(customers => customers.id !== deleted.id));
  }
}
