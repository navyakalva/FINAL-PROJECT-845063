import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Items } from 'src/app/Models/items';


import { Router } from '@angular/router';
import { BuyerService } from '../buyer.service';
import { ItemService } from 'src/app/Seller/item.service';
import { Cart } from 'src/app/Models/cart';
import { Category } from 'src/app/Models/category';

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
cart:Cart;
isShow:boolean=true;
clist:Category[];
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
buy(item2:Items)
{
  console.log(item2);
  localStorage.setItem('item1',JSON.stringify(item2));
  this.router.navigateByUrl('Buyerlandingpage/Buyproduct');
  
}
Show(){
  this.isShow=!this.Show
}
AddToCart(item2:Items){
  //let itemlocal=JSON.stringify(localStorage.getItem("item1"));
  console.log(item2);
  let bid=localStorage.getItem('bid');
 this.cart=new Cart();
 this.cart.id=(Math.round(Math.random()*1000));
 this.cart.itemid=Number(item2.id);
 this.cart.categoryid=Number(item2.categoryId);
 this.cart.subcategoryid=Number(item2.subcategoryId);
 this.cart.sellerid=Number(item2.sellerId);
 this.cart.stocknumber=Number(item2.stockNumber);
  this.cart.itemname=item2.itemName;
  this.cart.price=Number(item2.price);
 this.cart.description=item2.description;
 this.cart.imagepath=item2.imagepath;
 this.cart.remarks=item2.remarks;
 this.cart.buyerid=Number(bid);
 console.log(this.cart);
 this.service.Addtocart(this.cart).subscribe(res=>{
   console.log("Record added To Cart");
   alert('Item has been Added To Cart');
 })
}
// SearchByCategory(iid:number){
//   this.service.GetSubCategory(iid).subscribe(res=>{
//     this.list=res;
//     console.log(this.list);
//   })
//}

}

