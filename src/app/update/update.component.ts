import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  productid:any
  productDetails:any
  constructor(private activatedRoute:ActivatedRoute,private employeService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      this.productid=data['id']
    })
    this.employeService.viewsingle(this.productid)
    .subscribe((data)=>{
      this.productDetails=data
      console.log(this.productDetails)
    })
  }
  UpdateDetails(form:any){
    var newdata={
   
    id: form.value.id,
    name:form.value.name,
    age:  form.value.age,
    employeenumber:form.value.employeenumber,
    department: form.value.department
    }
    console.log(newdata)
    this.employeService.updateProduct(this.productid, newdata)
    .subscribe((data)=>{
      alert('product successfully updated')
      this.router.navigateByUrl('home')
    })
  }

}
