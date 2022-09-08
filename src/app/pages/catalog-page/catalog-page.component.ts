import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, map, Subject, tap } from 'rxjs';
import { DataApiService } from 'src/app/api/data-api.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss'],
})
export class CatalogPageComponent implements OnInit {
  categories: Category[];
  cartQty: Record<number, number> = {}; // с сервера

  mouseClicks$: Subject<Date>;

  qty: number;
  search$: Subject<string>;

  constructor(
    private _dataApi: DataApiService,
  ) { }

  ngOnInit(): void {
    // this._http.get<Category[]>('http://imanov-yii/data-api/categories')
    this._dataApi.getCategories()
      .subscribe({
        next: result => {
          this.categories = result;
          console.log(result);
        },
        error: err => {
          console.log(err);
          alert(err.message);
        },
        complete: () => {
          console.log('COMPLETE');
        },
      });

    this.mouseClicks$ = new Subject();
    this.mouseClicks$.subscribe({
      next: (date) => {
        console.log('First subscription', date);
      }
    });
    this.mouseClicks$.subscribe({
      next: (date) => {
        console.log('Second subscription', date);
      }
    });

    this.search$ = new Subject<string>();
    this.search$
      .pipe(
        filter(value => value.trim().length > 0),
        map(value => value.trim()),
        distinctUntilChanged(),
        debounceTime(500),
      )
      .subscribe(
        value => {
          console.log('SendRequest', value);
        }
      );

    // this.search$.subscribe(value => {
    //   this.qty = value.length;
    // })
  }

  incrementQty(productId: number) {
    this.cartQty[productId] = this.cartQty[productId]
      ? this.cartQty[productId] + 1
      : 1;
  }

  decrementQty(productId: number) {
    if (this.cartQty[productId]) {
      this.cartQty[productId] = this.cartQty[productId] - 1;
    }
  }

  emit() {
    this.mouseClicks$.next(new Date());
    // console.log('emit');
  }

  search(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.search$.next(value);
  }
}

