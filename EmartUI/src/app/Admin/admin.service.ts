import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import { Category } from '../Models/category';
import { Subcategory } from '../Models/subcategory';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
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
    public GetAllCategories():Observable<Category[]>
    {
       return this.http.get<Category[]>(this.url+'GetAllCategories')
      
    }
    public GetAllSub():Observable<Subcategory[]>
    {
       return this.http.get<Subcategory[]>(this.url+'GetAllSubCategories')
      
    }
    public UpdateCat(item:Category):Observable<any>
    {
      return this.http.put<any>(this.url+'UpdateCat/',JSON.stringify(item),Requestheaders)
    }
    public DeleteCat(id:string):Observable<any>
    {
     return this.http.delete<any>(this.url+'DeleteCat/'+id,Requestheaders)
    }
    public DeleteSub(id:string):Observable<any>
    {
     return this.http.delete<any>(this.url+'DeleteSub/'+id,Requestheaders)
    }
   
    public UpdateSub(item:Subcategory):Observable<any>
    {
      return this.http.put<any>(this.url+'UpdateSub/',JSON.stringify(item),Requestheaders)
    }
    
}
