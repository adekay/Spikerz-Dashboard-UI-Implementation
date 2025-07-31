import { Component, Input } from '@angular/core';
import { ServerAvailability } from '../../../types';

@Component({

  selector: 'app-ec2',
  templateUrl: './ec2.html',
  styleUrl: './ec2.scss'
})
export class Ec2 {
  @Input({ required: true }) connection?: ServerAvailability;
}
