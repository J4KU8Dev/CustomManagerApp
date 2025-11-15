import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { Menu } from "./menu/menu";
import { OptionsMenu } from "./options-menu/options-menu";

@Component({
  selector: 'app-root',
  imports: [Header, Menu, OptionsMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CustomManagerApp');
}
