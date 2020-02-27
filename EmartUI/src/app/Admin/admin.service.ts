import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import { Category } from '../Models/category';
import { Subcategory } from '../Models/subcategory';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
})}
@Injectable({
  providedIn: 'root'
})
export class AdminService 
{
  url:string='http://localhost:59595/Admin/'
  constructor(private http:HttpClient) {}
  public AddingCategory(item:Category):Observable<any>
    {
      return this.http.post(this.url+'AddCategory',JSON.stringify(item),Requestheaders)
    }
    public AddingSubCategory(item:Subcategory):Observable<any>
    {
      return this.http.post(this.url+'AddSubCategory',JSON.stringify(item),Requestheaders)
    }
}
