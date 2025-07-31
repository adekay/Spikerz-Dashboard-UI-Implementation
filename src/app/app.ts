import { Component, ViewChild } from '@angular/core';
import { Sidebar } from './layout/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [
    RouterOutlet,
    Sidebar
  ]
})
export class App {
  @ViewChild(Sidebar) sidebar!: Sidebar;
  isWideScreen = true;

  onScreenWidthChange(isWide: boolean) {
    this.isWideScreen = isWide;
  }
}
