import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  listProduct:Product[]=[
    {id:1,title:'t-shirt1',price:20,quantity:3,like:0},
    {id:2,title:'t-shirt2',price:5,quantity:500,like:2},
    {id:3,title:'t-shirt3',price:10,quantity:0,like:5},
  ]
  constructor() { }

  AddProduct(p:Product){
    this.listProduct.push(p)
  }
}
