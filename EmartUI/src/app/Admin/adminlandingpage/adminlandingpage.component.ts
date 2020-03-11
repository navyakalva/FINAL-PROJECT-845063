import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminlandingpage',
  templateUrl: './adminlandingpage.component.html',
  styleUrls: ['./adminlandingpage.component.css']
})
export class AdminlandingpageComponent implements OnInit {
  constructor(private route:Router){}


  ngOnInit() {
  }
  Logout()
  {
    localStorage.clear();
    this.route.navigateByUrl("home");
  }

}
