import { Component, OnInit } from '@angular/core';

import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { ItemService } from '../item.service';
@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent implements OnInit {
  viewitemform:FormGroup;
  submitted=false;
  list:Items[];
  item:Items;
  constructor(private formbuilder:FormBuilder,private service:ItemService)
  { 
    this.service.GetAllItems().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err)
    })
        
      
  }

  ngOnInit() {
    this.viewitemform=this.formbuilder.group({
      id:['',[Validators.required,Validators.pattern("^[0-9]$")]],
      price:['',Validators.required],
      itemname:['',Validators.required],
      description:['',Validators.required],
      stocknumber:['',Validators.required],
      remarks:['',Validators.required],
      categoryid:['',[Validators.required,Validators.pattern("^[0-9]$")]],
      subcategoryid:['',[Validators.required,Validators.pattern("^[0-9]$")]],
      sellerid:['',Validators.required],
      })
  }
  get f() { return this.viewitemform.controls; }

  onSubmit() {
      this.submitted = true;
     
     // this.Search();
  }

  onReset() {
      this.submitted = false;
      this.viewitemform.reset();
  }
  
   Update()
  {
    this.item=new Items();
    this.item.id=this.viewitemform.value["id"];
    this.item.categoryid=this.viewitemform.value["categoryid"];
    this.item.subcategoryid=this.viewitemform.value["subcategoryid"];
    this.item.price=Number(this.viewitemform.value["price"]);
    this.item.itemname=this.viewitemform.value["itemname"];
    this.item.description=this.viewitemform.value["description"];
    this.item.stocknumber=Number(this.viewitemform.value["stocknumber"]);
    this.item.remarks=this.viewitemform.value["remarks"];
    this.item.sellerid=this.viewitemform.value["sellerid"];
    console.log(this.item);
    this.service.UpdateItem(this.item).subscribe(res=>
      {
        console.log('record updated')
      })
  }
  Delete(id:any)
  {
    
    this.service.DeleteItem(id).subscribe(res=>{
      console.log('Record Deleted');
    },err=>{
      console.log(err);
    })
  }


}
