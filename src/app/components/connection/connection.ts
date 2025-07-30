import { Component, Input } from '@angular/core';
import { ServerAvailability } from '../../types';

@Component({
  standalone: false,
  selector: 'app-connection',
  templateUrl: './connection.html',
  styleUrl: './connection.scss'
})
export class Connection {
  @Input({ required: true }) connection?: ServerAvailability;
}
