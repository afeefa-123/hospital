import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  employeeid:any

  constructor(private activated:ActivatedRoute,private employeService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.activated.params.subscribe((data)=>{
      this.employeeid=data['id']
      console.log(this.employeeid);
    })
    this.employeService.deleteEmployee(this.employeeid)
    .subscribe((data)=>{
      alert('Employee deleted successfully')
      this.router.navigateByUrl('home')
    })
  }

}
