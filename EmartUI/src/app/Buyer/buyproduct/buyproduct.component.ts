import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { ItemService } from 'src/app/Seller/item.service';
import { Router } from '@angular/router';
import { PurchaseHistory } from 'src/app/Models/purchase-history';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-buyproduct',
  templateUrl: './buyproduct.component.html',
  styleUrls: ['./buyproduct.component.css']
})
export class BuyproductComponent implements OnInit {
  item:Items;
  list:Items[];
  submitted=false;
  transaction:PurchaseHistory;
  buyproductform:FormGroup;
  constructor(private formbuilder:FormBuilder,private service:ItemService,private buyer:BuyerService,private router:Router)
  {  this.service.GetAllItems().subscribe(res=>{
    this.list=res;
    console.log(this.list);
  },err=>{
    console.log(err)
  })
}
        

  ngOnInit() 
  {
    this.buyproductform=this.formbuilder.group({
      itemName:[''],
      transactiontype:[''],
      cardnumber:[''],
      CVV:[''],
      ed:[''],
      buyername:[''],
      pid:[''],
      sid:[''],
      noofitems:[''],
      itemid:[''],
      datetime:[''],
      bid:['']
    })
   
    this.viewdata();
    
  }
  viewdata()
  {
    this.item=JSON.parse(localStorage.getItem('item1'));
    console.log(this.item);
    console.log(this.item.id);
    this.buyproductform.patchValue({
        itemName:this.item.itemName,
      
      
    })
  }
  purchase()
  {
    this.submitted= true;
    if(this.buyproductform.valid)
    {
      console.log(this.item);
      this.transaction=new PurchaseHistory();
     this.transaction.sellerid=Number(this.item.sellerId);
      this.transaction.itemid=Number(this.item.id);
      this.transaction.noofitems=Number(this.buyproductform.value["noofitems"]);
      this.transaction.buyerid=Number(localStorage.getItem("id"));
      this.transaction.datetime=this.buyproductform.value["datetime"];
      this.transaction.Transactionid=Math.round(Math.random()*1000);
      this.transaction.transactiontype=this.buyproductform.value["transactiontype"];
      this.transaction.remarks=this.buyproductform.value["remarks"];
      this.transaction.purchaseid=Math.round(Math.random()*1000);
      console.log(this.transaction)
      this.buyer.BuyItem(this.transaction).subscribe(res=>
        {
        
          console.log('Added succesfully');
        },err=>{console.log(err)}
  
        )
      }

  }
 
    
  
}
