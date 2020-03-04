
import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { AccountService } from '../account.service';
import {Router} from '@angular/router';
import {Token} from 'src/app/Models/token';
import { Buyer } from 'src/app/Models/Buyer';
import { Seller } from 'src/app/Models/seller';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  loginform:FormGroup;
  buyer:Buyer;
  seller:Seller;
  token:Token;
  submit=false;
  role:any;


  constructor(private frombuilder:FormBuilder,private service:AccountService,private route:Router)
   {
     
    }

  ngOnInit()
   {
      this.loginform=this.frombuilder.group({
        username:['',Validators.required],
        password:['',Validators.required],
        role:['',Validators.required]
      });
    }
  onSubmit()
  {
    this.submit=true;
   if(this.loginform.valid)
   {
     this.Validate();
    
     console.log(JSON.stringify(this.loginform.value))
      //  alert("form is validated");
      //  console.log(this.loginform.value)//return js object
      //  console.log(JSON.stringify(this.loginform.value))//return json object
      //  console.log(this.loginform.value["username"]);
      //  console.log(this.loginform.value["password"]);
    }
  }
  get f() {return this.loginform.controls;}
  onReset()
  {
    this.submit=false;
    this.loginform.reset();
  }
  public Validate()
{
  let username=this.loginform.value['username'];
  let password=this.loginform.value['password'];
  let role=this.loginform.value['role'];
  // alert(username)
  // alert(role)
  if(role=='buyer')
{
  let token=new Token();
this.service.BuyerLogin(username,password).subscribe(res=>{token=res;console.log(token)
  if(token.message=="success"){
    localStorage.setItem('token',token.token)
    localStorage.setItem("id",token.bid.toString());
    // localStorage.setItem("username",this.buyer.username);
    // localStorage.setItem("password",this.buyer.password);
  this.route.navigateByUrl("Buyerlandingpage")
  }
  else{
    alert("inavlid");
  }
});
}
if(role=='seller')
{
 let token=new Token();
this.service.SellerLogin(username,password).subscribe(res=>{token=res;console.log(token)
  if(token.message=="success"){
    localStorage.setItem('token',token.token)
    localStorage.setItem("id",token.sid.toString());
    // localStorage.setItem("username",this.seller.username);
    // localStorage.setItem("password",this.seller.password);
    this.route.navigateByUrl("Sellerlandingpage")
  }
  else{
    alert("inavlid");
  }
});

}
if(username=="Admin" && password=="admin")
{
  this.route.navigateByUrl("Adminlandingpage");
}


}

}