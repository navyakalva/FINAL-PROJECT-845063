import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import { Buyer } from '../Models/Buyer';
import { Seller } from '../Models/seller';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}
@Injectable({
  providedIn: 'root'
})
export class AccountService
{
  url:string='http://localhost:59595/Account/'

  constructor(private http:HttpClient) { }
  public RegisterBuyer(item:Buyer):Observable<any>
  {
    return this.http.post(this.url+'BuyerRegister/',JSON.stringify(item),Requestheaders)
  }
  public RegisterSeller(item:Seller):Observable<any>
  {
    return this.http.post(this.url+'SellerRegister/',JSON.stringify(item),Requestheaders)
  }
  public BuyerLogin(username:any,password:any):Observable<any>
  {
    return this.http.get(this.url+'BuyerLogin/'+username+'/'+password,Requestheaders)
  }
  public SellerLogin(username:any,password:any):Observable<any>
  {
    return this.http.get(this.url+'SellerLogin/'+username+'/'+password,Requestheaders)
  }
}

