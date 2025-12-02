import { Component, computed, input, output, signal } from '@angular/core';
import { customerModel } from '../customer.model';
import { MenuCustomer } from "./menu-customer/menu-customer";
import { SortingInterface } from './sorting.interface';

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
  
  columns = signal([
    { label: 'First Name', key: 'firstName' },
    { label: 'Last Name', key: 'lastName' },
    { label: 'Address', key: 'address' },
    { label: 'City', key: 'city' },
    { label: 'State', key: 'state' },
    { label: 'Order Total', key: 'orderTotal' },
  ]);

  sorting = signal<SortingInterface>({
    column: 'firstName',
    order: 'asc',
  })

  isDescSorting(column: string) {
    return this.sorting().column === column && this.sorting().order === 'desc';
  }

  isAscSorting(column: string) {
    return this.sorting().column === column && this.sorting().order === 'asc';
  }

  sortTable(column: string) {
    const current = this.sorting();

    this.sorting.set({
      column,
      order:  current.column === column && current.order === 'desc' ? 'asc' : 'desc',
    })

  }
  sortedCustomers = computed(() => {
    const list = [...this.customers()];
    const { column, order } = this.sorting();

    return list.sort((a, b) => {
      const x = (a as any)[column];
      const y = (b as any)[column];

      if (x < y) return order === 'asc' ? -1 : 1;
      if (x > y) return order === 'asc' ? 1 : -1;
      return 0;
    });
  });

  onCustomerUpdated(updated: customerModel) {
    this.updatedCustomer.emit(updated);
  }
  onCustomerDeleted(deleted: customerModel) {
    this.deletedCustomer.emit(deleted);
    // console.log(deleted);
  }
}
