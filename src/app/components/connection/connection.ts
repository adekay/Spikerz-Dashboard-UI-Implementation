import { Component, Input } from '@angular/core';
import { ServerAvailability } from '../../types';
import { Server } from './server/server';
import { Ec2 } from './ec2/ec2';
import { Instance } from './instance/instance';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.html',
  styleUrl: './connection.scss',
  imports: [Ec2, Server, Instance, NgbModule, CommonModule]
})
export class Connection {
  @Input({ required: true }) connection?: ServerAvailability;
}
