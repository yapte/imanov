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