import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  lg=new FormControl('',Validators.required)
  pwd=new FormControl('',Validators.required)

  registerForm=new FormGroup({
    cin:new FormControl('',[Validators.required,Validators.pattern('[0-9]{8}')]),
    name:new FormControl('',[Validators.required,Validators.minLength(5)]),
    age:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
  })
  save(){
    console.log(this.lg)
  }
}
