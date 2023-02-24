import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  employeeid:any
  empoloyeedetails:any

  constructor(private employeeservices:ProductService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      this.employeeid= data['id']
    }
    )
    this.employeeservices.viewsingle(this.employeeid).subscribe((data)=>{
      this. empoloyeedetails=data
    })

  }

}
