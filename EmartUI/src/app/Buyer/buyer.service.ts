import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import { Buyer } from '../Models/Buyer';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
})}
@Injectable({
  providedIn: 'root'
})
export class BuyerService {
 url:string='http://localhost:59595/Buyer/'
 
  constructor(private http:HttpClient) { }
  public GetById(id:string):Observable<Buyer>
  {
    return this.http.get<Buyer>(this.url+'getprofile/'+id,Requestheaders)
  }
  public UpdateProfile(item:Buyer):Observable<any>
  {
    return this.http.put<any>(this.url+'editbuyerprofile/',JSON.stringify(item),Requestheaders)
  }
}
