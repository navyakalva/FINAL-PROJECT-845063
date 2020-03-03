import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Subcategory } from 'src/app/Models/subcategory';
import { AdminService } from '../admin.service';
import { Category } from 'src/app/Models/category';
@Component({
  selector: 'app-addsubcategory',
  templateUrl: './addsubcategory.component.html',
  styleUrls: ['./addsubcategory.component.css']
})
export class AddsubcategoryComponent implements OnInit {
  addsubcategoryform:FormGroup;
  submitted=false;
  list1:Subcategory[];
  item:Subcategory;
  sub:Subcategory;
  categorylist:Category[];
  constructor(private formbuilder:FormBuilder,private service:AdminService) 
  {
    this.sub=new Subcategory();
    this.service.GetAllCategories().subscribe(res=>{
      this.categorylist=res;
      console.log(this.categorylist);
    })
   }

  ngOnInit() 
  {
    this.addsubcategoryform=this.formbuilder.group({
     
      subcategoryname:['',Validators.required],
      categoryid:['',Validators.required],
      GST:['',Validators.required],
      briefdetails:['',Validators.required],
    })
  }
  get f(){return this.addsubcategoryform.controls;}
  onSubmit()
  {
    this.submitted= true;
    this.Add();
    //display form value on success
    if(this.addsubcategoryform.valid)
    {
      alert("Success")
      console.log(JSON.stringify(this.addsubcategoryform.value));
      
    }

  }
  onReset() {
    this.submitted = false;
    this.addsubcategoryform.reset();
  }
  Add()
  {
     this.item=new Subcategory();
     this.item.subcategoryid=Math.round(Math.random()*100);
     this.item.subcategoryname=this.addsubcategoryform.value["subcategoryname"];
     this.item.briefdetails=this.addsubcategoryform.value["briefdetails"];
     this.item.GST=Number(this.addsubcategoryform.value["GST"]);
     this.item.categoryid=Number(this.addsubcategoryform.value["categoryid"]);
     
     this.service.AddingSubCategory(this.item).subscribe(res=>{
       console.log('Record Added')
     },err=>{
       console.log(err)
     })
  }

}
