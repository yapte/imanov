import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataApiService } from 'src/app/api/data-api.service';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  category: Category;
  products: Product[];

  constructor(
    // private _http: HttpClient,
    private _dataApi: DataApiService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    const categoryId = this._activatedRoute.snapshot.params['categoryId'];

    // this._http.get<{ category: Category, products: Product[] }>(`http://imanov-yii/data-api/products?category_id=${categoryId}`)
    this._dataApi.getProductsForCategory(categoryId)
      .subscribe(result => {
        this.category = result.category;
        this.products = result.products;
      });
  }

  go() {
    this._router.navigate(['/catalog', 2, 1])
  }
}

// interface ItemList<T> {
//   pageQty: number;
//   totalQty: number;
//   currentPage: number;
//   items: T[];
// }



// // ItemList<Category>
// interface CategoryList {
//   pageQty: number;
//   totalQty: number;
//   currentPage: number;
//   items: Category[];
// }

// // ItemList<Product>
// interface ProductList {
//   pageQty: number;
//   totalQty: number;
//   currentPage: number;
//   items: Product[];
// }

// // ItemList<Article>
// interface ArticleList {
//   pageQty: number;
//   totalQty: number;
//   currentPage: number;
//   items: any[];
// }
