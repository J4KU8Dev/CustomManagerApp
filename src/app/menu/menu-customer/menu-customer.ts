import { Component, inject, input } from '@angular/core';
import { customerModel } from '../../customer.model';
import { CurrencyPipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { UpdateCustomer as UpdateCustomerComponent } from '../../update-customer/update-customer';
@Component({
  selector: '[app-menu-customer]',
  imports: [CurrencyPipe, UpdateCustomerComponent],
  templateUrl: './menu-customer.html',
  styleUrl: './menu-customer.css',
})
export class MenuCustomer {
  customer = input.required<customerModel>();
  public dialog = inject(MatDialog);
  updateCustomer(){
    this.dialog.open(UpdateCustomerComponent);
    // input data do update dialog box and two way data binding
  }
}
