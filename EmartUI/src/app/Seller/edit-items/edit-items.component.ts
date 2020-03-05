import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { ItemService } from '../item.service';
@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css']
})
export class EditItemsComponent implements OnInit {
  edititemform:FormGroup;
  submitted=false;
  list1:Items[];
  item:Items;
  constructor(private formbuilder:FormBuilder,private service:ItemService) { }


  ngOnInit() 
  {
    this.edititemform=this.formbuilder.group({
     // id:['',[Validators.required,Validators.pattern("^[0-9]$")]],
      price:['',Validators.required],
      itemname:['',Validators.required],
      description:['',Validators.required],
      stocknumber:['',Validators.required],
      remarks:['',Validators.required],
     // categoryid:['',[Validators.required,Validators.pattern("^[0-9]$")]],
     // subcategoryid:['',[Validators.required,Validators.pattern("^[0-9]$")]],
     // sellerid:['',Validators.required],
      })
  }
  get f(){return this.edititemform.controls;}
  onSubmit()
  {
    this.submitted= true;
    
    
    //display form value on success
    if(this.edititemform.valid)
    {
      alert("Success")
      console.log(JSON.stringify(this.edititemform.value));
      
    }
  }
  onReset() {
    this.submitted = false;
    this.edititemform.reset();
  }
  Search()
  {
    let id=this.edititemform.value["id"];
    this.service.GetById(id).subscribe(res=>{
      this.item=res;
      console.log(this.item);
      this.edititemform.setValue({
        id:this.item.id,
        itemname:this.item.itemName,
        price:this.item.price,
        stocknumber:this.item.stockNumber,
        description:this.item.description,
        remarks:this.item.remarks,
        categoryid:this.item.categoryId,
        subcategoryid:this.item.subcategoryId,

      })
    })
  }
   Update()
  {
    this.item=new Items();
    this.item.id=this.edititemform.value["id"];
    this.item.itemName=this.edititemform.value["name"];
    this.item.price=Number(this.edititemform.value["price"]);
    this.item.stockNumber=Number(this.edititemform.value["stock"]);
    this.item.description=this.edititemform.value["description"];
    this.item.remarks=this.edititemform.value["remarks"];
    this.item.categoryId=Number(this.edititemform.value["categoryid"]);
    this.item.subcategoryId=Number(this.edititemform.value["subcategoryid"]);
    console.log(this.item);
    this.service.UpdateItem(this.item).subscribe(res=>{
      console.log('Record Updated')
    })
  }

}
