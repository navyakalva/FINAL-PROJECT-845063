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
    // this.viewitemform=this.formbuilder.group({
    //   id:['',[Validators.required,Validators.pattern("^[0-9]$")]],
    //   price:['',Validators.required],
    //   itemname:['',Validators.required],
    //   description:['',Validators.required],
    //   stocknumber:['',Validators.required],
    //   remarks:['',Validators.required],
    //   categoryid:['',[Validators.required,Validators.pattern("^[0-9]$")]],
    //   subcategoryid:['',[Validators.required,Validators.pattern("^[0-9]$")]],
    //   sellerid:['',Validators.required],
    //   })
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
  // Search()
  // {
  //   let id=this.viewitemform.value["id"];
  //   this.service.GetById(id).subscribe(res=>{
  //     this.item=res;
  //     console.log(this.item);
  //     this.viewitemform.setValue({
  //       id:this.item.id,
  //       itemname:this.item.itemname,
  //       price:this.item.price,
  //       stocknumber:this.item.stocknumber,
  //       description:this.item.description,
  //       remarks:this.item.remarks,
  //       categoryid:this.item.categoryid,
  //       subcategoryid:this.item.subcategoryid,

  //     })
  //   })
  // }
  // Update()
  // {
  //   this.item=new Items();
  //   this.item.id=this.viewitemform.value["id"];
  //   this.item.itemname=this.viewitemform.value["name"];
  //   this.item.price=Number(this.viewitemform.value["price"]);
  //   this.item.stocknumber=Number(this.viewitemform.value["stock"]);
  //   this.item.description=this.viewitemform.value["description"];
  //   this.item.remarks=this.viewitemform.value["remarks"];
  //   this.item.categoryid=Number(this.viewitemform.value["categoryid"]);
  //   this.item.subcategoryid=Number(this.viewitemform.value["subcategoryid"]);
  //   console.log(this.item);
  //   this.service.UpdateItem(this.item).subscribe(res=>{
  //     console.log('Record Updated')
  //   })
  // }
  // Delete()
  // {
  //   let id=this.viewitemform.value["id"];
  //   this.service.DeleteItem(id).subscribe(res=>{
  //     console.log('Record Deleted');
  //   },err=>{
  //     console.log(err);
  //   })
  // }


}
