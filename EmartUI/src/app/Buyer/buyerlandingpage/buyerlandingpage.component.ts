import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buyerlandingpage',
  templateUrl: './buyerlandingpage.component.html',
  styleUrls: ['./buyerlandingpage.component.css']
})
export class BuyerlandingpageComponent implements OnInit {


  constructor(private route:Router){}
  
  

  ngOnInit() {
  }
  Logout()
  {
    localStorage.clear();
    this.route.navigateByUrl("home");
  }

}
