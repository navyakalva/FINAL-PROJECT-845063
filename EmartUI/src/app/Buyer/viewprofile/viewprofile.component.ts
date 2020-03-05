import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
 
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
