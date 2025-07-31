import { Component } from '@angular/core';
import { ListItem, ServerAssessment, ServerCard, ServerConnection } from '../../components';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [
    ListItem,
    ServerConnection,
    ServerAssessment,
    ServerCard
  ]
})
export class Home { }
