import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  color:string="red"
  priceMax!:number
  title : string = "welcome 4BI3"
  listProduct:Product[]=[
    {id:1,title:'t-shirt1',price:20,quantity:3,like:0},
    {id:2,title:'t-shirt2',price:5,quantity:500,like:2},
    {id:3,title:'t-shirt3',price:10,quantity:0,like:5},
  ]

  msg(){
    alert("hello")
  }
  increment(id:number){
    this.listProduct[id].like++
  }
  buy(id:number){
    this.listProduct[id].quantity--

  }
}
