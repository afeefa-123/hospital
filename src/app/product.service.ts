import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  //api
  viewAllemployee(){
    return this.http.get('http://localhost:3000/posts')
  }
  viewsingle(employeeid:any){
 return this.http.get('http://localhost:3000/posts/'+employeeid)
  }
  //add
  addemployee(employeebody:any){
    return this.http.post('http://localhost:3000/posts/',employeebody)

  }
  //update
  updateProduct(productid:any,productbody:any){
    return this.http.put('http://localhost:3000/posts/'+productid,productbody)

  }
  //delete
  deleteEmployee(productid:any){
    return this.http.delete('http://localhost:3000/posts/'+productid)
  }
}
