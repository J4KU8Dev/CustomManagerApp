import { computed, Injectable, signal } from '@angular/core';
import type { customerModel} from './customer.model';
import { customers as initialData } from './customer';
@Injectable({
  providedIn: 'root',
})
export class CustomerStore {
  public master = signal<customerModel[]>([...initialData]);
  search = signal('');
  currentPage = signal(0);
  pageSize = signal(10);
  selectedCustomer = signal<customerModel | null>(null);

  filtered = computed(() => {
    const s = this.search().toLowerCase();
    if (!s) return this.master();

    return this.master().filter(c =>
      c.firstName.toLowerCase().includes(s) ||
      c.lastName.toLowerCase().includes(s) ||
      c.address.toLowerCase().includes(s) ||
      c.city.toLowerCase().includes(s) ||
      c.state.toLowerCase().includes(s));

  })

  sorting = signal({
    column: 'firstName',
    order: 'asc',
  })

  sorted = computed(() => {
    const list = [...this.filtered()];
    const { column, order } = this.sorting();

    return list.sort((a: any, b: any) => {
      const x = a[column];
      const y = b[column];
      if (x < y) return order === 'asc' ? -1 : 1;
      if (x > y) return order === 'asc' ? 1 : -1;
      return 0;
    });
  });

   paginated = computed(() => {
    const start = this.currentPage() * this.pageSize();
    return this.sorted().slice(start, start + this.pageSize());
  });

  updateSearch(value: string) {
    this.search.set(value);
    this.currentPage.set(0);
  }

  sort(column: string) {
    const curr = this.sorting();
    this.sorting.set({
      column,
      order: curr.column === column && curr.order === 'desc' ? 'asc' : 'desc'
    });
  }

  addCustomer(customer: customerModel) {
    this.master.update(list => [...list, customer]);
  }

  updateCustomer(updated: customerModel) {
    this.master.update(list =>
      list.map(c => (c.id === updated.id ? updated : c))
    );
  }

  deleteCustomer(target: customerModel) {
    this.master.update(list =>
      list.filter(c => c.id !== target.id)
    );
  }

  selectCustomer(id: string) {
    const c = this.master().find(c => c.id === id) || null;
    this.selectedCustomer.set(c);
  }

  updatePage(page: number, size: number) {
    this.currentPage.set(page);
    this.pageSize.set(size);
  }
  
}
