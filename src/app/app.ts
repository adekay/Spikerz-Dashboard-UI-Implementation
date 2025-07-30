import { Component, ViewChild } from '@angular/core';
import { Sidebar } from './layout/sidebar/sidebar';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  @ViewChild(Sidebar) sidebar!: Sidebar;
  isWideScreen = true;

  onScreenWidthChange(isWide: boolean) {
    this.isWideScreen = isWide;
  }
}
