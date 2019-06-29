import { Component, Input, OnInit } from '@angular/core';
import { IMappedProducts } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardData: Array<IMappedProducts>;
  @Input() cardLabels: Array<string>;

  constructor(private _router: Router) {}

  ngOnInit(): void {
    // console.log('cardData', this.cardData);
  }

  productDetails(cardData) {
    this._router.navigate([`/details/${cardData.name}`]);
  }
}
