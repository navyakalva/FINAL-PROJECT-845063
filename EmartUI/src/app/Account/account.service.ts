import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import { Item } from '../item';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
})}
@Injectable({
  providedIn: 'root'
})
export class AccountService
{
  url:string='http://localhost:59595/Account/'

  constructor(private http:HttpClient) { }
  public RegisterBuyer(item:Item):Observable<any>
  {
    return this.http.post(this.url+'AddItem/',JSON.stringify(item),Requestheaders)
  }
}
