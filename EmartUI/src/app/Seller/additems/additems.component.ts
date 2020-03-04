import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Items } from 'src/app/Models/items';
import { ItemService } from '../item.service';
import { Category } from 'src/app/Models/category';
import { Subcategory } from 'src/app/Models/subcategory';
import { AdminService } from 'src/app/Admin/admin.service';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {
  additemform:FormGroup;
  submitted=false;
  list1:Items[];
  item:Items;
  clist:Category[];
  sclist:Subcategory[];
  
  constructor(private formbuilder:FormBuilder,private service:ItemService,private route:Router) 
  { 
    this.service.GetAllCategories().subscribe(res=>{
      this.clist=res;
      console.log(this.clist);
    })

  }

  ngOnInit() {
    this.additemform=this.formbuilder.group({
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
  get f(){return this.additemform.controls;}
  onSubmit()
  {
    this.submitted= true;
    this.Add();
    //display form value on success
    if(this.additemform.valid)
    {
      alert("Success")
      console.log(JSON.stringify(this.additemform.value));
      
    }
  }
  onReset() {
    this.submitted = false;
    this.additemform.reset();
  }
  Add()
  {
     this.item=new Items();
     this.item.id=Math.round(Math.random()*100);
     this.item.itemname=this.additemform.value["itemname"];
     this.item.description=this.additemform.value["description"];
     this.item.price=Number(this.additemform.value["price"]);
     this.item.stocknumber=Number(this.additemform.value["stocknumber"]);
     this.item.remarks=this.additemform.value["remarks"];
     this.item.categoryid=Number(this.additemform.value["categoryid"]);
     this.item.subcategoryid=Number(this.additemform.value["subcategoryid"]);
     this.item.sellerid=Number(this.additemform.value["sellerid"]);

     this.service.AddingItem(this.item).subscribe(res=>{
       console.log('Record Added')
     },err=>{
       console.log(err)
     })
  }
  GetSubCategory()
  {
    let cid=this.additemform.value["categoryid"];
    console.log(cid);
    this.service. GetSub(cid).subscribe(res=>{
      this.sclist=res;
      console.log(this.sclist);
    })
  }
}
