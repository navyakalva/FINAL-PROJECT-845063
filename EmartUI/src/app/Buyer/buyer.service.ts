import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import { Buyer } from '../Models/Buyer';
import { PurchaseHistory } from '../Models/purchase-history';
import { Cart } from '../Models/cart';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}
@Injectable({
  providedIn: 'root'
})
export class BuyerService {
 url:string='http://localhost:59595/Buyer/'
 
  constructor(private http:HttpClient) { }
  public GetById(id:number):Observable<Buyer>
  {
    return this.http.get<Buyer>(this.url+'getprofile/'+id,Requestheaders)
  }
  public UpdateProfile(item:Buyer):Observable<any>
  {
    return this.http.put<any>(this.url+'editbuyerprofile/',JSON.stringify(item),Requestheaders)
  }
  public Search(itemName:string):Observable<any>
  {
    return this.http.get<any>(this.url+'search/'+itemName,Requestheaders)
  }
  public BuyItem(item:PurchaseHistory ):Observable<PurchaseHistory>
  {
    return this.http.post<PurchaseHistory>(this.url+'AddItem',JSON.stringify(item),Requestheaders)
  }
  public GetItem(id:any):Observable<PurchaseHistory>
  {
    return this.http.get<PurchaseHistory>(this.url+'Transactionhistory/'+id,Requestheaders)
  }
  public Addtocart(cart:Cart):Observable<any>
  {
     return this.http.post<any>(this.url+'Addtocart',JSON.stringify(cart),Requestheaders)
  }
  public deletefromcart(id:number):Observable<any>
  {
     return this.http.delete<any>(this.url+'Deletefromcart/'+id,Requestheaders)
  }
  public getcart():Observable<any>
  {
    return this.http.get<Cart[]>(this.url+'GetCart',Requestheaders)
  }

}
