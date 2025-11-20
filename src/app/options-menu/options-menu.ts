import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { customers } from '../customer';
import { customerModel } from '../customer.model';
import { MatButtonModule } from '@angular/material/button';
import { DialogBox } from '../dialog-box/dialog-box';
import { MatDialog } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';
@Component({
  selector: 'app-options-menu',
  imports: [FormsModule, MatButtonModule],
  templateUrl: './options-menu.html',
  styleUrl: './options-menu.css',
})
export class OptionsMenu {
  readonly dialog = inject(MatDialog);
  customers = signal([...customers]);
  searchFilter = '';

  openDialog() {
  const dialogRef = this.dialog.open(DialogBox);
  dialogRef.afterClosed().subscribe((newCustomer: customerModel | undefined) => {
    if (newCustomer) {
      console.log('New customer:', newCustomer);
      // customers.push(newCustomer);
      this.customers.update(list => [...list, newCustomer]);
      this.filter();
    }
  });
  }
  result:customerModel[] = [];
  filteredData = output<customerModel[]>();
  filter(){
    if(this.searchFilter){
      const maybeNumber = Number(this.searchFilter);
      const searchToLower = this.searchFilter.toLowerCase();
      this.result = this.customers().filter(n => n.firstName.toLowerCase().includes(searchToLower) || n.lastName.toLowerCase().includes(searchToLower) || n.address.toLowerCase().includes(searchToLower) || n.city.toLowerCase().includes(searchToLower) || n.state.toLowerCase().includes(searchToLower));
    }
    else{
      this.result = [...this.customers()];
    }
    console.log(this.result);
    this.filteredData.emit(this.result);
  }

 
}
