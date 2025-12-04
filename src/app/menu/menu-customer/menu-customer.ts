import { Component, inject, input, output } from '@angular/core';
import { customerModel } from '../../customer.model';
import { CurrencyPipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { UpdateCustomer as UpdateCustomerComponent } from '../../update-customer/update-customer';
import { RouterLink, RouterModule, RouterLinkActive } from "@angular/router";
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: '[app-menu-customer]',
  imports: [CurrencyPipe, RouterLink, MatTooltipModule, RouterModule, RouterLinkActive],
  templateUrl: './menu-customer.html',
  styleUrl: './menu-customer.css',
})
export class MenuCustomer {
  customer = input.required<customerModel>();
  updatedCustomer = output<customerModel>();
  deletedCustomer = output<customerModel>();
  dialog = inject(MatDialog);

  updateCustomer(){
    const dialogRef = this.dialog.open(UpdateCustomerComponent, {
      data: this.customer()
    });

    dialogRef.afterClosed().subscribe((updated: customerModel | undefined) => {
      if (updated) {
        this.updatedCustomer.emit(updated);
      }
    });
  }
  deleteCustomer(){ 
    const customerToDelete = this.customer();
    const accepted = confirm('Are you sure to delete customer ' + customerToDelete.firstName + ' ' + customerToDelete.lastName + ' ?')
    if(accepted) {
      // console.log('deleting customer ' + customerToDelete.firstName + ' ' + customerToDelete.lastName);
      this.deletedCustomer.emit(customerToDelete);
    }
  }
}
