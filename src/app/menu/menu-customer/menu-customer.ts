import { Component, input } from '@angular/core';
import { customerModel } from '../../customer.model';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: '[app-menu-customer]',
  imports: [CurrencyPipe],
  templateUrl: './menu-customer.html',
  styleUrl: './menu-customer.css',
})
export class MenuCustomer {
  customer = input.required<customerModel>();
}
