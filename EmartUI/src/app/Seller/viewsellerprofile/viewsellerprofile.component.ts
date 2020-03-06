import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { SellerService } from '../seller.service';
import { Seller } from 'src/app/Models/seller';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewsellerprofile',
  templateUrl: './viewsellerprofile.component.html',
  styleUrls: ['./viewsellerprofile.component.css']
})
export class ViewsellerprofileComponent implements OnInit {
  editform:FormGroup;
  submitted=false;
  seller:Seller;
  list:Seller[];
  constructor(private Formbuilder:FormBuilder,private service:SellerService,private route:Router) { }
  ngOnInit() 
  {
    
    this.editform=this.Formbuilder.group({
      id:[''],
      username:[''],
      companyname:[''],
      gstin:[''],
      briefAboutcompany:[''],
      postalAddress:[''],
      emailid:[''],
      contactno:['']
    })
    this.viewprofile();
  }
  viewprofile()
  {
        let id=Number(localStorage.getItem("id"))
      this.service.GetById(id).subscribe(res=>{this.seller=res;
      console.log(this.seller)
      this.editform.setValue({
        id:this.seller.id,
        username:this.seller.username,
        companyname:this.seller.companyname,
        briefAboutcompany:this.seller.briefAboutcompany,
        postalAddress:this.seller.postalAddress,
        emailid:this.seller.emailid,
        contactno:this.seller.contactno,
        gstin:this.seller.gstin,

      })
    });
  }
  get f(){return this.editform.controls;}
  onSubmit()
  {
    this.submitted= true;
    if(this.editform.valid)
    {
      
      this.seller.username=this.editform.value["username"];
      this.seller.emailid=this.editform.value["emailid"];
      this.seller.contactno=this.editform.value["contactno"];
      this.seller.companyname=this.editform.value["companyname"];
      this.seller.briefAboutcompany=this.editform.value["briefAboutcompany"];
      this.seller.postalAddress=this.editform.value["postalAddress"];
      this.seller.gstin=this.editform.value["gstin"];
      console.log(this.seller)
      this.service.UpdateProfile(this.seller).subscribe(res=>
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
