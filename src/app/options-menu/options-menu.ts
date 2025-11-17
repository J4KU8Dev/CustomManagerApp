import { Component, inject, signal } from '@angular/core';
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
  
  // old version below
  // openDialog(){
  //   this.dialog.open(DialogBox);
  // }

  openDialog() {
  const dialogRef = this.dialog.open(DialogBox);
  dialogRef.afterClosed().subscribe((newCustomer: customerModel | undefined) => {
    if (newCustomer) {
      console.log('New customer:', newCustomer);
      customers.push(newCustomer);
    }
  });
}


  customers = customers;
}
