import { Component, Input } from '@angular/core';
import { IMappedProducts } from '../../models/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() cardData: Array<IMappedProducts>;
  @Input() cardLabels: Array<string>;
}
