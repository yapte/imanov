import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  category: Category;
  products: Product[];

  constructor(
    private _http: HttpClient,
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const categoryId = this._activatedRoute.snapshot.params['categoryId'];

    this._http.get<{ category: Category, products: Product[] }>(`http://imanov-yii/data-api/products?category_id=${categoryId}`)
      .subscribe(result => {
        this.category = result.category;
        this.products = result.products;
      });
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
