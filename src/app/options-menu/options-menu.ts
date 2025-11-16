import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { customers } from '../customer';
import { customerModel } from '../customer.model';
import { MatButtonModule } from '@angular/material/button';
import { DialogBox } from '../dialog-box/dialog-box';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-options-menu',
  imports: [FormsModule, MatButtonModule],
  templateUrl: './options-menu.html',
  styleUrl: './options-menu.css',
})
export class OptionsMenu {
  readonly dialog = inject(MatDialog);
  openDialog(){
    this.dialog.open(DialogBox);
  }


  filter = signal<string>("");
  customers = customers;
  result(wrapper: string) {
    
  }
}
