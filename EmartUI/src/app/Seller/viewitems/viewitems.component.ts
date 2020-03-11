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
  imagepath:string;
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
      itemName:['',Validators.required],
      description:['',Validators.required],
      stockNumber:['',Validators.required],
      remarks:['',Validators.required],
       categoryId:['',[Validators.required,Validators.pattern("^[0-9]$")]],
       subcategoryId:['',[Validators.required,Validators.pattern("^[0-9]$")]],
       sellerId:['',Validators.required],
       imagepath:['']
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
      this.item.categoryId=this.viewitemform.value["categoryId"];
    this.item.subcategoryId=this.viewitemform.value["subcategoryId"];
    this.item.price=Number(this.viewitemform.value["price"]);
    this.item.itemName=this.viewitemform.value["itemName"];
    this.item.description=this.viewitemform.value["description"];
    this.item.stockNumber=Number(this.viewitemform.value["stockNumber"]);
    this.item.remarks=this.viewitemform.value["remarks"];
      this.item.sellerId=this.viewitemform.value["sellerId"];
      this.item.imagepath=this.imagepath;
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
  Edit(id:string)
  {
    this.service.GetById(id).subscribe(res=>{
      this.item=res;
      console.log(this.item);
      this.viewitemform.setValue({
        id:Number(this.item.id),
        itemName:this.item.itemName,
        price:Number(this.item.price),
        stockNumber:Number(this.item.stockNumber),
        description:this.item.description,
        remarks:this.item.remarks,
        categoryId:Number(this.item.categoryId),
         subcategoryId:Number(this.item.subcategoryId),
         sellerId:Number(this.item.sellerId),
        imagepath:this.item.imagepath
        

      })
    })
  }
  fileEvent(event){
    this.imagepath = event.target.files[0].name;
 }


}
