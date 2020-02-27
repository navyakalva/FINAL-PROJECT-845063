import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-buyereditprofile',
  templateUrl: './buyereditprofile.component.html',
  styleUrls: ['./buyereditprofile.component.css']
})
export class BuyereditprofileComponent implements OnInit {
  viewform:FormGroup;
  submitted=false;
  constructor(private Formbuilder:FormBuilder) { }

  ngOnInit() {
  }
  get f(){return this.viewform.controls;}
  onSubmit()
  {
    this.submitted= true;
    
    //display form value on success
    if(this.viewform.valid)
    {
      alert("Success")
      console.log(JSON.stringify(this.viewform.value));
      
    }
   }
   onReset() {
    this.submitted = false;
    this.viewform.reset();
  }

}
