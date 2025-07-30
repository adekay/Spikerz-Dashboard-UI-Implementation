import { Component, Input } from '@angular/core';
import { ServerAvailability } from '../../../types';

@Component({
  standalone: false,
  selector: 'app-instance',
  templateUrl: './instance.html',
  styleUrl: './instance.scss'
})
export class Instance {
  @Input({ required: true }) connection?: ServerAvailability;
}
