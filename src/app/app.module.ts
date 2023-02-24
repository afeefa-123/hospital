import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AddproductssComponent } from './addproductss/addproductss.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from'@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SingleComponent } from './single/single.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    AddproductssComponent,
    SignupComponent,
    SingleComponent,
    UpdateComponent,
    DeleteComponent
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
