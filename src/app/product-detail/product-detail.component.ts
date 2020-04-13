import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { products } from '../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: IProduct;
  @Output()
  productAdded = new EventEmitter<IProduct>();

  productAdd() {
    this.productAdded.emit(this.product);
  }

  
  constructor() { }

  ngOnInit() {
  }

}
