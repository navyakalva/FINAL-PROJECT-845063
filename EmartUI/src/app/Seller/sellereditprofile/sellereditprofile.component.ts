import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-sellereditprofile',
  templateUrl: './sellereditprofile.component.html',
  styleUrls: ['./sellereditprofile.component.css']
})
export class SellereditprofileComponent implements OnInit {
  editform:FormGroup;
  submitted=false;
  constructor(private Formbuilder:FormBuilder) { }

  ngOnInit() {
  }
  get f(){return this.editform.controls;}
  onSubmit()
  {
    this.submitted= true;
    
    //display form value on success
    if(this.editform.valid)
    {
      alert("Success")
      console.log(JSON.stringify(this.editform.value));
      
    }
   }
   onReset() {
    this.submitted = false;
    this.editform.reset();
  }

}
