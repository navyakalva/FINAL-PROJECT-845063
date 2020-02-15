
import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname:string;
  pwd:string;
  loginform:FormGroup;
  submit=false;

  constructor(private frombuilder:FormBuilder)
   {
     
    }

  ngOnInit()
   {
      this.loginform=this.frombuilder.group({
        uname:['',Validators.required],
        pwd:['',Validators.required]
      });
  }
  onSubmit()
  {
    this.submit=true;
    if(this.loginform.invalid)
    {
      return;
      
    }
    else
    {
       alert("form is validated");
       console.log(this.loginform.value)//return js object
       console.log(JSON.stringify(this.loginform.value))//return json object
       console.log(this.loginform.value["uname"]);
       console.log(this.loginform.value["pwd"]);
       
      
      
    }
  }
  get f() {return this.loginform.controls;}
  onReset()
  {
    this.submit=false;
    this.loginform.reset();
  }

}