import { Component } from '@angular/core';
import { ServerAvailability } from '../../types';
import { EC2, INSTANCE1, INSTANCE2, SERVER1, SERVER2 } from '../../constants';

@Component({
  standalone: false,
  selector: 'app-server-connection',
  templateUrl: './server-connection.html',
  styleUrl: './server-connection.scss'
})
export class ServerConnection {
  ec2: ServerAvailability = EC2;
  server1: ServerAvailability = SERVER1;
  server2: ServerAvailability = SERVER2;
  instance1: ServerAvailability = INSTANCE1;
  instance2: ServerAvailability = INSTANCE2;
}
