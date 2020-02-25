import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  addcategoryform:FormGroup;
  submitted=false;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() 
  {
    this.addcategoryform=this.formbuilder.group({
      category_id:['',Validators.required,Validators],
      category_name:['',Validators.required,Validators],
      brief_details:['',Validators.required,Validators],
    })
  }
  get f(){return this.addcategoryform.controls;}
  onSubmit()
  {
    this.submitted= true;
    //display form value on success
    if(this.addcategoryform.valid)
    {
      alert("Success")
      console.log(JSON.stringify(this.addcategoryform.value));
      
    }

  }

}
