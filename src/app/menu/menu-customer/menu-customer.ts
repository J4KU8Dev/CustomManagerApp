import { Component, inject, input, output, signal } from '@angular/core';
import { customerModel } from '../../customer.model';
import { CurrencyPipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { UpdateCustomer as UpdateCustomerComponent } from '../../update-customer/update-customer';
import { customers } from '../../customer';
@Component({
  selector: '[app-menu-customer]',
  imports: [CurrencyPipe],
  templateUrl: './menu-customer.html',
  styleUrl: './menu-customer.css',
})
export class MenuCustomer {
  customer = input.required<customerModel>();
  updatedCustomer = output<customerModel>();
  public dialog = inject(MatDialog);
  customers = signal([...customers]);

  updateCustomer(){
    const dialogRef = this.dialog.open(UpdateCustomerComponent,{
      data:this.customer(),
    });
    dialogRef.afterClosed().subscribe((UpdatedCustomer: customerModel) => {
      if(UpdatedCustomer){
        this.customers.update(model => model.map(c => c.id === UpdatedCustomer.id ? UpdatedCustomer : c)
);
      }
      console.log(UpdatedCustomer);
      this.updatedCustomer.emit(UpdatedCustomer)
    })
    
  }
}
