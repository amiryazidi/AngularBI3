import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { Router } from '@angular/router';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private ps:ProductService,private route:Router,private consP:ConsumerProductService) { }
  registerForm=new FormGroup({
    id:new FormControl('',[Validators.required,Validators.pattern('[0-9]')]),
    title:new FormControl('',[Validators.required,Validators.minLength(5)]),
    quantity:new FormControl('',Validators.required),
    price:new FormControl('',[Validators.required]),
    like:new FormControl('',[Validators.required]),
  })

  add(){
    // this.ps.AddProduct(this.registerForm.value as any)
    // this.route.navigateByUrl('/product')
    this.consP.AddProduct(this.registerForm.value as any).subscribe(
     ()=> this.route.navigateByUrl('/product')
    )

  }
}
