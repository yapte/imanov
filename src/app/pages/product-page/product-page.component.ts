import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from 'src/app/data/products';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  product: Product;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.productId = this._activatedRoute.snapshot.params['productId'];

    this._activatedRoute.params
      .subscribe(params => {
        const productId = +params['productId'];
        this.product = PRODUCTS.find(p => p.id === productId);
      })
  }

}
