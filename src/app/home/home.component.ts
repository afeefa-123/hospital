import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employeeList:any

  constructor(private productservice:ProductService) {
  }

  ngOnInit(): void { 
    this.productservice.viewAllemployee()
    .subscribe((data)=>{
      this.employeeList=data
      console.log(this.employeeList)

    })
 
  }

}
