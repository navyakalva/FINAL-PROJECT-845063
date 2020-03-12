import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Buyer } from 'src/app/Models/Buyer';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registerbuyer',
  templateUrl: './registerbuyer.component.html',
  styleUrls: ['./registerbuyer.component.css']
})
export class RegisterbuyerComponent implements OnInit {
  buyerregisterform:FormGroup;
  submitted=false;
 list1:Buyer[];
  item:Buyer;
  
  constructor(private Formbuilder:FormBuilder,private service:AccountService,private route:Router)
   { 
    
      
   }

  ngOnInit()
   {
    this.buyerregisterform=this.Formbuilder.group({
      id:['',Validators.required,Validators],
      username:['',[Validators.required,Validators.pattern('^[A-Z a-z]{3,10}$')]],
      password:['',Validators.required],
      emailid:['',[Validators.required,Validators.email]],
      mobileno:['',[Validators.required,
        Validators.pattern('^[6-9][0-9]{9}$')]],
      createddatetime:['',Validators.required]
   });
   
  }
  get f(){return this.buyerregisterform.controls;}
  onSubmit()
  {
    this.submitted= true;
    this.Add();
    //display form value on success
    if(this.buyerregisterform.valid)
    {
      alert("Success")
      console.log(JSON.stringify(this.buyerregisterform.value));
      
    }
   }
   onReset() {
    this.submitted = false;
    this.buyerregisterform.reset();
  }
  Add()
  {
     this.item=new Buyer();
     this.item.id=Math.round(Math.random()*100);
     this.item.username=this.buyerregisterform.value["username"];
     this.item.password=this.buyerregisterform.value["password"];
     this.item.emailid=this.buyerregisterform.value["emailid"];
     this.item.mobileno=this.buyerregisterform.value["mobileno"];
     this.item.createddatetime=this.buyerregisterform.value["createddatetime"];
     console.log(this.item);
     this.service.RegisterBuyer(this.item).subscribe(res=>{
       console.log('Record Added')
     },err=>{
       console.log(err)
     })
  }
  Log()
  {
    this.route.navigateByUrl("home/login");
  }
  

}
