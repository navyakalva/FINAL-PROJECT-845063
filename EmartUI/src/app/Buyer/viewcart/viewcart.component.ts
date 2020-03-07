import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Models/cart';
import { Router } from '@angular/router';
import { Items } from 'src/app/Models/items';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {

  cartlist:Cart[];
  item:Items;
    constructor(private route:Router,private service:BuyerService) {
      this.service.getcart().subscribe(res=>{
        this.cartlist=res;
        console.log(this.cartlist);
      })
     }

  ngOnInit() {
  }
  BuyNow(item1:Items){
    console.log(item1);
    this.item=item1;
    localStorage.setItem('item1',JSON.stringify(this.item));
    this.route.navigateByUrl('/BUYER/BUY PRODUCT');
}
Remove(itemid:string)
{
console.log(itemid);
let id=itemid;
this.service.deletefromcart(id).subscribe(res=>{
  console.log('Item Removed from Cart');
  alert('Item Removed from Cart');
})
}
Logout(){
//   localStorage.clear();
 this.route.navigateByUrl('HOME');
}

}
