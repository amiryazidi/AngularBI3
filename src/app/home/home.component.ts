import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { CalculService } from '../services/calcul.service';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  color:string="red"
  priceMax!:number
  title : string = "welcome 4BI3"
  listProduct:Product[]=[]
  alert!:number
  constructor(private ps:ProductService,private cl:CalculService,private consP:ConsumerProductService) { }
  ngOnInit(){
    //this.listProduct=this.ps.listProduct
    this.alert=this.cl.stat(this.listProduct,'quantity',0)
    this.consP.getProduct().subscribe({
      next:(data)=>this.listProduct=data,
      error:(error)=> console.log(error),
      complete:()=>console.log("finish")  
    })

  }
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
