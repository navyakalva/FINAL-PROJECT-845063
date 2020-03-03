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
  clist:Category[];
  sclist:Subcategory[];
  constructor(private formbuilder:FormBuilder,private services:ItemService,private service:AdminService)
  { 
    
    this.services.GetAllCategories().subscribe(res=>{
      this.clist=res;
      console.log(this.clist);
    })

        
      
  }

  ngOnInit() 
  {
    
    this.viewform=this.formbuilder.group({
      subcategoryid:['',[Validators.required,Validators.pattern("^[0-9]$")]],
      subcategoryname:['',Validators.required],
      briefdetails:['',Validators.required],
     
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
  GetSubCategory()
  {
    let cid=this.viewform.value["categoryid"];
    console.log(cid);
    this.services. GetSub(cid).subscribe(res=>{
      this.sclist=res;
      console.log(this.sclist);
    })
  }

}
