import { Component } from '@angular/core';
import { ServersArray } from '../../types';
import { SERVERS } from '../../constants';
import { materialModules } from '../../shared/material';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-server-card',
  templateUrl: './server-card.html',
  styleUrl: './server-card.scss',
  imports: [CommonModule, ...materialModules]
})
export class ServerCard {
  servers: ServersArray = SERVERS;
}
