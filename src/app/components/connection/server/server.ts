import { Component, Input } from '@angular/core';
import { ServerAvailability } from '../../../types';

@Component({
  standalone: false,
  selector: 'app-server',
  templateUrl: './server.html',
  styleUrl: './server.scss'
})
export class Server {
  @Input({ required: true }) connection?: ServerAvailability;
}
