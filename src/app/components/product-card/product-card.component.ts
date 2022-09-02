import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Role, User } from 'src/app/models/user';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Input() qty: number;

  @Output() onInc = new EventEmitter();
  @Output() onDec = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    const user = new User(); // API
    if (user.role === Role.Admin) {
      // 
    }
   }

  dec(e: Event) {
    e.stopPropagation();
    this.onDec.emit();
  }

  inc(e: Event) {
    e.stopPropagation();
    this.onInc.emit();
  }
}
