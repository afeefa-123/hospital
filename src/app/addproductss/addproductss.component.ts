import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproductss',
  templateUrl: './addproductss.component.html',
  styleUrls: ['./addproductss.component.css']
})
export class AddproductssComponent implements OnInit {
  addemployeeForm=this.formbuilder.group({
    
    
    id: [''],
    name: [''],
    age: [''],
    employeenumber:[''],
    department:['']

  })

  constructor(private formbuilder:FormBuilder,private productService: ProductService,private router:Router) { }

  ngOnInit(): void {

  }
  addemployee(){
    console.log(this.addemployeeForm.value.id);
   var newemployee={
    id: this.addemployeeForm.value.id,
    name: this.addemployeeForm.value.name,
    age:  this.addemployeeForm.value.age,
    employeenumber:this.addemployeeForm.value.employeenumber,
    department: this.addemployeeForm.value.department


   }
   this.productService.addemployee(newemployee)
   .subscribe((data)=>{
    alert("New employee added successfully")
    this.router.navigateByUrl('home')
    
   })
  }

}
