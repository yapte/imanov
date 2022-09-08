import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataApiService } from 'src/app/api/data-api.service';
import { PRODUCTS } from 'src/app/data/products';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  product: Product;

  constructor(
    // private _http: HttpClient,
    private _dataApi: DataApiService,
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const productId = this._activatedRoute.snapshot.params['productId'];
    // this._http.get<Product>(`http://imanov-yii/data-api/products-item?product_id=${productId}`)
    this._dataApi.getProductsItem(productId)
      .subscribe(result => {
        this.product = result;
      });
  }

}
