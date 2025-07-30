import { Component } from '@angular/core';
import { ServersArray } from '../../types';
import { SERVERS } from '../../constants';

@Component({
  standalone: false,
  selector: 'app-server-card',
  templateUrl: './server-card.html',
  styleUrl: './server-card.scss'
})
export class ServerCard {
  servers: ServersArray = SERVERS;
  panelOpenState: { [key: number]: boolean } = {};

  togglePanel(index: number, event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.panelOpenState[index] = !this.panelOpenState[index];
  }

  isPanelOpen(index: number): boolean {
    return this.panelOpenState[index] || false;
  }
}
