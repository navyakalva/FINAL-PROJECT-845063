import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { ItemService } from 'src/app/Seller/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyproduct',
  templateUrl: './buyproduct.component.html',
  styleUrls: ['./buyproduct.component.css']
})
export class BuyproductComponent implements OnInit {
  viewitemform:FormGroup;
  submitted=false;
  list:Items[];
  item:Items;
  constructor(private formbuilder:FormBuilder,private service:ItemService,private router:Router)
  { 
    this.service.GetAllItems().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err)
    })
  }
        

  ngOnInit() {
  }
  buy()
  {
    this.router.navigateByUrl('Buyerlandingpage/Buyproduct');
    
  }
}
