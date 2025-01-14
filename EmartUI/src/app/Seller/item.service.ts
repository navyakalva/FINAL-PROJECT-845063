import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import { Items } from '../Models/items';
import { Category } from '../Models/category';
import { Subcategory } from '../Models/subcategory';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}
@Injectable({
  providedIn: 'root'
})
export class ItemService 
{
  url:string='http://localhost:59595/Item/'
 
  constructor(private http:HttpClient) { }
  public AddingItem(item:Items):Observable<any>
  {
    return this.http.post(this.url+'AddItems',JSON.stringify(item),Requestheaders)
  }
  public GetAllItems():Observable<Items[]>
  {
     return this.http.get<Items[]>(this.url+'GetAllItems')
    
  }
  public GetById(id:string):Observable<Items>
  {
    return this.http.get<Items>(this.url+'GetItems/'+id,Requestheaders)
  }
   public UpdateItem(item:Items):Observable<any>
   {
     return this.http.put<any>(this.url+'Update/',JSON.stringify(item),Requestheaders)
   }
   public DeleteItem(id:string):Observable<any>
   {
    return this.http.delete<any>(this.url+'Delete/'+id,Requestheaders)
   }
   public GetAllCategories():Observable<Category[]>
    {
       return this.http.get<Category[]>(this.url+'GetAllCategories')
    }
    public GetSub(categoryid:number):Observable<any>
   {
    return this.http.get<Subcategory>(this.url+'GetSubCategory/'+categoryid,Requestheaders)
   }
}
