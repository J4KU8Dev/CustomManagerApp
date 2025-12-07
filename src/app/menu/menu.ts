import { Component, computed, inject, input, output, signal } from '@angular/core';
import { customerModel } from '../customer.model';
import { MenuCustomer } from "./menu-customer/menu-customer";
import { SortingInterface } from './sorting.interface';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { CustomerStore } from '../customer-store';

@Component({
  selector: 'app-menu',
  imports: [MenuCustomer, MatPaginatorModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  columns = signal([
    { label: 'First Name', key: 'firstName' },
    { label: 'Last Name', key: 'lastName' },
    { label: 'Address', key: 'address' },
    { label: 'City', key: 'city' },
    { label: 'State', key: 'state' },
    { label: 'Order Total', key: 'orderTotal' },
  ]);

  store = inject(CustomerStore)

  isDescSorting(column: string) {
    const sorting = this.store.sorting();
    return sorting.column === column && sorting.order === 'desc';
  }

  isAscSorting(column: string) {
    const sorting = this.store.sorting();
    return sorting.column === column && sorting.order === 'asc';
  }

  sortTable(column: string) {
    this.store.sort(column);
  }

  onPageEvent(event: PageEvent) {
    this.store.updatePage(event.pageIndex, event.pageSize);
  }

  updateCustomer(customerId: string, updatedData: any) {
    const updatedCustomer = { ...this.store.master().find(c => c.id === customerId), ...updatedData };
    this.store.updateCustomer(updatedCustomer);
  }

  deleteCustomer(customerId: string) {
    const customer = this.store.master().find(c => c.id === customerId);
    if (customer) this.store.deleteCustomer(customer);
  }

  // lista klientów do wyświetlenia (posortowana + paginacja)
  paginatedCustomers = computed(() => this.store.paginated());
}