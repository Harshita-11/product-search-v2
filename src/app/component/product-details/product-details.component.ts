import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../service/demo1.service';
import { IMappedProducts } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  cardLabels: Array<string>;
  card: IMappedProducts;

  constructor(private demoSrvc: DemoService, private _route: ActivatedRoute) {}

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails(): void {
    const name: string = this._route.snapshot.params.name;

    this.demoSrvc.getList().subscribe(data => {
      console.log(data, name);
      this.card = data.filter(item => item.name === name)[0];
      this.cardLabels = Object.keys(data[0]);
    });
  }
}
