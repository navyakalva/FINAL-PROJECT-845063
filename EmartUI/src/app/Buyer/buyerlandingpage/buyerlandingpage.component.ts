import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buyerlandingpage',
  templateUrl: './buyerlandingpage.component.html',
  styleUrls: ['./buyerlandingpage.component.css']
})
export class BuyerlandingpageComponent implements OnInit {
name:string;
  constructor( private route:Router) {
    if(sessionStorage.getItem("un"))
    {
    this.name=sessionStorage.getItem("un");
    console.log(this.name);
   }
   if(localStorage.getItem("sid")==null)
    {
      this.route.navigateByUrl('/home/login');

    }
   }
  

  ngOnInit() {
  }

}
