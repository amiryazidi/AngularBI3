import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ConsumerProductService {

  constructor(private http:HttpClient) { }

  //methode get

  getProduct(){
    return this.http.get<Product[]>("http://localhost:3000/products")
  }

  getProductById(id:number){
    return this.http.get<Product>("http://localhost:3000/products"+'/'+id)

  }
  AddProduct(p:Product){
    return this.http.post("http://localhost:3000/products",p)

  }
}
