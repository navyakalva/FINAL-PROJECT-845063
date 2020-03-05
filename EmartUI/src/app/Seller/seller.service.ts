import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import { Seller } from '../Models/seller';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
})}
@Injectable({
  providedIn: 'root'
})
export class SellerService {

  url:string='http://localhost:59595/Seller/'
 
  constructor(private http:HttpClient) { }
  public GetById(id:string):Observable<Seller>
  {
    return this.http.get<Seller>(this.url+'GetSellerProfile/'+id,Requestheaders)
  }
  public UpdateProfile(item:Seller):Observable<any>
  {
    return this.http.put<any>(this.url+'EditProfile/',JSON.stringify(item),Requestheaders)
  }
}
