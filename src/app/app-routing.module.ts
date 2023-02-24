import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductssComponent } from './addproductss/addproductss.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteComponent } from './delete/delete.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SingleComponent } from './single/single.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
 {path:'addproductss',component:AddproductssComponent},
 {path:'single/:id',component:SingleComponent},
 {path:'update/:id',component:UpdateComponent},
 {path:'delete/:id',component:DeleteComponent}
 


 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
