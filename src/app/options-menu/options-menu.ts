import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogBox } from '../dialog-box/dialog-box';
import { customerModel } from '../customer.model';

@Component({
  selector: 'app-options-menu',
  imports: [FormsModule, MatButtonModule],
  templateUrl: './options-menu.html',
  styleUrl: './options-menu.css',
})
export class OptionsMenu {
  readonly dialog = inject(MatDialog);
  allCustomers = input.required<customerModel[]>();
  filteredView = output<customerModel[]>();
  addCustomer = output<customerModel>();
  searchFilter = '';

  openDialog() {
    const dialogRef = this.dialog.open(DialogBox);
    dialogRef.afterClosed().subscribe((newCustomer: customerModel | undefined) => {
      if (!newCustomer) return;
      this.addCustomer.emit(newCustomer);
      const combined = [...this.allCustomers(), newCustomer];
      this.emitView(combined);
    });
  }
  emitView(list: customerModel[]) {
    if (!this.searchFilter) {
      this.filteredView.emit(list);
      return;
    }
    const s = this.searchFilter.toLowerCase();
    const result = list.filter(c =>
      c.firstName.toLowerCase().includes(s) ||
      c.lastName.toLowerCase().includes(s) ||
      c.address.toLowerCase().includes(s) ||
      c.city.toLowerCase().includes(s) ||
      c.state.toLowerCase().includes(s)
    );
    this.filteredView.emit(result);
  }

  filter() {
    this.emitView(this.allCustomers());
  }
}