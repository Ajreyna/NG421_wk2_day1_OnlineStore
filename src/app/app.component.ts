import { Component, OnInit, Type } from '@angular/core';
import { ProductService } from './services/product.service';
import { products } from './products';
import { IProduct } from './models/iproduct';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  products: Array<IProduct>;

  productWasAdded(product: IProduct) {
    this.productService.addToCart(product);
  }

  constructor(private productService : ProductService) {
    
   }
  // ngOnInit(): void {
  //   throw new Error("Method not implemented.");
  // }
  

   ngOnInit(){
    this.products = this.productService.getProducts();
   }

}
