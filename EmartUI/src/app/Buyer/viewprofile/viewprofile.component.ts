import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Buyer } from 'src/app/Models/Buyer';
import { BuyerService } from '../buyer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
 
  viewform:FormGroup;
  submitted=false;
  buyer:Buyer;
  list:Buyer[];
  constructor(private Formbuilder:FormBuilder,private service:BuyerService,private route:Router) { }

  ngOnInit() 
  {
    this.viewform=this.Formbuilder.group({
      id:[''],
      username:[''],
      password:[''],
      emailid:[''],
      mobileno:[''],
     
   });
   this.viewprofile();
  }
  viewprofile()
  {
        let id=Number(localStorage.getItem("id"))
      this.service.GetById(id).subscribe(res=>{this.buyer=res;
      console.log(this.buyer)
      this.viewform.setValue({
        id:this.buyer.id,
        username:this.buyer.username,
        emailid:this.buyer.emailid,
        mobileno:this.buyer.mobileno,
        password:this.buyer.password

      })
    });
  }
  get f(){return this.viewform.controls;}
  onSubmit()
  {
    this.submitted= true;
    if(this.viewform.valid)
    {
      
      this.buyer.username=this.viewform.value["username"];
      this.buyer.emailid=this.viewform.value["emailid"];
      this.buyer.mobileno=this.viewform.value["mobileno"];
      this.buyer.password=this.viewform.value["password"];
      console.log(this.buyer)
      this.service.UpdateProfile(this.buyer).subscribe(res=>
        {
          console.log('Updated succesfully');
        },err=>{console.log(err)}
  
        )

  //display form value on success
  

     alert("Success");
     this.route.navigateByUrl('home/login');
    
       }
    
     }
}
