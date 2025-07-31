import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss'],
  imports: [CommonModule]
})
export class Sidebar implements OnDestroy, OnInit {
  isCollapsed = false;
  isWideScreen = false;
  showMobileMenu = false;
  private resizeSub!: Subscription;

  @Output() screenWidthChange = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.checkScreenWidth();
    this.resizeSub = fromEvent(window, 'resize').subscribe(() => this.checkScreenWidth());
  }

  private checkScreenWidth(): void {
    const newWidthState = window.innerWidth >= 1048;

    if (newWidthState !== this.isWideScreen) {
      this.isWideScreen = newWidthState;
      this.screenWidthChange.emit(this.isWideScreen);
      this.isCollapsed = !this.isWideScreen;
      this.showMobileMenu = false;
    }
  }

  openFullSidebar() {
    this.showMobileMenu = true;
    this.isCollapsed = false;
  }

  toggleSidebar() {
    if (!this.isWideScreen) {
      this.showMobileMenu = !this.showMobileMenu;
      return;
    }
    this.isCollapsed = !this.isCollapsed;
  }

  hideSidebar() {
    this.showMobileMenu = false;
  }

  ngOnDestroy() {
    this.resizeSub.unsubscribe();
  }
}
