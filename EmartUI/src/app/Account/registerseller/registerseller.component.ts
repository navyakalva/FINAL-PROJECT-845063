import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Seller } from 'src/app/Models/seller';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-registerseller',
  templateUrl: './registerseller.component.html',
  styleUrls: ['./registerseller.component.css']
})
export class RegistersellerComponent implements OnInit {
  sellerform:FormGroup;
  submit=false;
  list1:Seller[];
  item:Seller;
  constructor(private formbuilder:FormBuilder,private service:AccountService) { }

  ngOnInit() 
  {
    this.sellerform=this.formbuilder.group({
      id:['',Validators.required,Validators],
      username:['',[Validators.required,Validators.pattern('^[A-Z-a-z]{3,20}$')]],
      password:['',[Validators.required]],
      companyname:['',[Validators.required,Validators.pattern('^[A-Z-a-z]{3,20}$')]],
      GSTIN:['',[Validators.required,]],
      briefaboutcompany:['',[Validators.required,]],
      postaladdress:['',[Validators.required,]],
      website:['',[Validators.required,]],
      emailid:['',[Validators.required,Validators.email]],
      contactno:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]]
      
      });
       
  }
  get f()
  {
    return this.sellerform.controls;
  }
  onsubmit()
  {
    this.submit=true;
    this.Add();
    if(this.sellerform.valid)
    {
    alert("form is validated");
    
    console.log(JSON.stringify(this.sellerform.value))
    }
  }
  onReset()
  {
      this.submit=false;
      this.sellerform.reset();
  }
  Add()
  {
     this.item=new Seller();
     this.item.id=Math.round(Math.random()*100);
     this.item.username=this.sellerform.value["username"];
     this.item.password=this.sellerform.value["password"];
     this.item.emailid=this.sellerform.value["emailid"];
     this.item.contactno=this.sellerform.value["contactno"];
     this.item.gstin=this.sellerform.value["GSTIN"];
     this.item.companyname=this.sellerform.value["companyname"];
     this.item.briefAboutcompany=this.sellerform.value["briefaboutcompany"];
     this.item.website=this.sellerform.value["website"];
     this.item.postalAddress=this.sellerform.value["postaladdress"];
     console.log(this.item);
     this.service.RegisterSeller(this.item).subscribe(res=>{
       console.log('Record Added')
     },err=>{
       console.log(err)
     })
  }


}
