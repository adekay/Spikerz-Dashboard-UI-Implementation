import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.html',
  styleUrl: './list-item.scss'
})
export class ListItem {
  @Input() label = '';
  @Input() value = '';
}
