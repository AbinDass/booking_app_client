import { Component } from '@angular/core';
import {trigger,state,style,animate,transition,} from '@angular/animations';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  items = [
    { title: 'Card 1', description: 'Description for Card 1' },
    { title: 'Card 2', description: 'Description for Card 2' },
    { title: 'Card 3', description: 'Description for Card 3' },
    { title: 'Card 3', description: 'Description for Card 3' },
    { title: 'Card 3', description: 'Description for Card 3' },
    { title: 'Card 3', description: 'Description for Card 3' },
    { title: 'Card 3', description: 'Description for Card 3' },
    { title: 'Card 3', description: 'Description for Card 3' },
    { title: 'Card 3', description: 'Description for Card 3' },
    { title: 'Card 3', description: 'Description for Card 3' },
    // Add more items as needed
  ];
}
