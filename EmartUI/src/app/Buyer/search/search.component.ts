import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Items } from 'src/app/Models/items';


import { Router } from '@angular/router';
import { BuyerService } from '../buyer.service';
import { ItemService } from 'src/app/Seller/item.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchform:FormGroup;
list:Items[];
items:Items;
list1:Items[];
  constructor(private service:BuyerService,private itemservice:ItemService,private router:Router,
    private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.searchform=this.formbuilder.group({
      itemName:['']
    })
   this.ViewItems();
  }
ViewItems()
{ 
  this.itemservice.GetAllItems().subscribe(res=>
    {
     
      this.list1=res;
      console.log(this.list1);
    },
    err=>{
      console.log(err);
    });
}
search()
{
  this.items=new Items();
  this.items.itemName=this.searchform.value["itemName"];
  this.service.Search(this.items.itemName).subscribe(res=>{
    this.list=res;
    console.log(this.list);
 
  }
  ,err=>{
    console.log(err);
  })
}
buy()
{
  this.router.navigateByUrl('Buyerlandingpage/Buyproduct');
  
}
addtocart()
{

}

}