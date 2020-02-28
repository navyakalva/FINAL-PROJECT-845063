import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  viewform:FormGroup;
  submitted=false;
  list:Category[];
  item:Category;
  constructor(private formbuilder:FormBuilder,private service:AdminService)
  { 
    this.service.GetAllCategories().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err)
    })
        
      
  }

  ngOnInit() 
  {
    this.viewform=this.formbuilder.group({
      categoryid:['',[Validators.required,Validators.pattern("^[0-9]$")]],
      categoryname:['',Validators.required],
      briefdetails:['',Validators.required],
     
      })
  }
  Update()
  {
    this.item=new Category();
    this.item.categoryid=this.viewform.value["categoryid"];
    this.item.categoryname=this.viewform.value["categoryname"];
    this.item.briefdetails=this.viewform.value["briefdetails"];
   
   
    console.log(this.item);
    this.service.UpdateCat(this.item).subscribe(res=>{
      console.log('Record Updated')
    })
  }
  Delete(id:any)
  {
   
    this.service.DeleteCat(id).subscribe(res=>{
      console.log('Record Deleted');
    },err=>{
      console.log(err);
    })
  }

}
