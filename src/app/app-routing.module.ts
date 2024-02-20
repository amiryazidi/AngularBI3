import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './residences/residences.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ApartementComponent } from './apartement/apartement.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  {path:'',redirectTo:'/product',pathMatch:"full"},
  {path:'product',component:HomeComponent},
  {path:'residence',component:ResidencesComponent},
  {path:'form',component:ReactiveComponent},
  {path:'product/:id',component:DetailProductComponent},
  {path:'apartement/:id',component:ApartementComponent},
  {path:'**' , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
