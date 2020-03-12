import { Component, OnInit } from '@angular/core';
import { Subcategory } from 'src/app/Models/subcategory';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { AdminService } from '../admin.service';
import { ItemService } from 'src/app/Seller/item.service';
import { Category } from 'src/app/Models/category';
@Component({
  selector: 'app-viewsub',
  templateUrl: './viewsub.component.html',
  styleUrls: ['./viewsub.component.css']
})
export class ViewsubComponent implements OnInit {
  viewform:FormGroup;
  submitted=false;
  list:Subcategory[];
  item:Subcategory;
 
  constructor(private formbuilder:FormBuilder,private services:ItemService,private service:AdminService)
  { 
    this.service.GetAllSub().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err)
    })
        
    }

        
  ngOnInit() 
  {
    
    this.viewform=this.formbuilder.group({
      subcategoryid:['',[Validators.required,Validators.pattern("^[0-9]$")]],
      subcategoryname:['',Validators.required],
      briefdetails:['',Validators.required],
      GST:['',Validators.required]
     
      })
  }
  Delete(id:any)
  {
   
    this.service.DeleteSub(id).subscribe(res=>{
      console.log('Record Deleted');
    },err=>{
      console.log(err);
    })
  }
  // Update()
  // {
  //   this.item=new Subcategory();
  //   this.item.subcategoryid=this.viewform.value["subcategoryid"];
  //   this.item.subcategoryname=this.viewform.value["subcategoryname"];
  //   this.item.briefdetails=this.viewform.value["briefdetails"];
  //   this.item.GST=this.viewform.value["GST"];
   
  //   console.log(this.item);
  //   this.service.UpdateSub(this.item).subscribe(res=>{
  //     console.log('Record Updated')
  //   })
  // }
}