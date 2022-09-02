import { Component, HostBinding, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/data/products';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {

  products: Product[] = PRODUCTS; // с сервера
  cartQty: Record<number, number> = {}; // с сервера

  constructor() {
    // this.cartQty[1] = 1;
    // this.cartQty[345] = 6;

    // {1: 1}
    // {345: 6} => {345: 7}

    // App
    // CartQty$: Observable<number> => 
    //     1. Иконка с корзиной Q (CartQty$.subscribe(qty => Q = qty)), 
    //     2. На карточке товара кол-во QWERTY (CartQty$.subscribe(x => QWERTY = x))

    // ProductCart
    //     [+] => newQty = CartQty$.value + 1 => CartQty$.next(newQty)
    //     [-] => newQty = CartQty$.value - 1 => CartQty$.next(newQty)

    // CartPage
    //     [ClearCart] => CartQty$.next(0)

    // OrderHistory
    //     [RepeatOrder] => CartQty$.next(Order.qty)
  }

  ngOnInit(): void {
  }

  incrementQty(productId: number) {
    this.cartQty[productId] = this.cartQty[productId]
      ? this.cartQty[productId] + 1
      : 1;
  }

  decrementQty(productId: number) {
    // truthy 
    // falsy  == false: false | 0 | null | undefined | ''
    if (this.cartQty[productId]) { 
      this.cartQty[productId] = this.cartQty[productId] - 1;
    }
  }
}
