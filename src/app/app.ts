import { Component, OnInit, signal } from '@angular/core';
import { Header } from "./header/header";
import { Menu } from "./menu/menu";
import { OptionsMenu } from "./options-menu/options-menu";
import { customerModel } from './customer.model';
import { customers } from './customer';

@Component({
  selector: 'app-root',
  imports: [Header, Menu, OptionsMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('CustomManagerApp');
  saveData(filter: customerModel[]){
    this.result = filter;
  }
  ngOnInit(): void {
    console.log(this.result);
  }
  result:customerModel[]=[...customers];

}
