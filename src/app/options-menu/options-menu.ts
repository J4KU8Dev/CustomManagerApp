import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { customers } from '../customer';
import { customerModel } from '../customer.model';
@Component({
  selector: 'app-options-menu',
  imports: [FormsModule],
  templateUrl: './options-menu.html',
  styleUrl: './options-menu.css',
})
export class OptionsMenu {
  filter = signal<string>("");
  customers = customers;
  result(wrapper: string) {
    
  }
}
