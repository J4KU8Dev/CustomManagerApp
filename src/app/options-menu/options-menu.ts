import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogBox } from '../dialog-box/dialog-box';
import { customerModel } from '../customer.model';
import { CustomerStore } from '../customer-store';

@Component({
  selector: 'app-options-menu',
  imports: [FormsModule, MatButtonModule],
  templateUrl: './options-menu.html',
  styleUrl: './options-menu.css',
})
export class OptionsMenu {
  public store = inject(CustomerStore);
  private dialog = inject(MatDialog);

  search = this.store.search; // signal z store

  filter() {
    this.store.updateSearch(this.search());
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogBox);

    dialogRef.afterClosed().subscribe(newCustomer => {
      if (!newCustomer) return;
      this.store.addCustomer(newCustomer);
      this.store.updateSearch(''); // reset filtra
    });
  }
}