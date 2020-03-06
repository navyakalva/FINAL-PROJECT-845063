import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminlandingpageComponent } from './Admin/adminlandingpage/adminlandingpage.component';
import { AddcategoryComponent } from './Admin/addcategory/addcategory.component';
import { AddsubcategoryComponent } from './Admin/addsubcategory/addsubcategory.component';
import { BlockunblocksellerComponent } from './Admin/blockunblockseller/blockunblockseller.component';
import { BlockunblockbuyerComponent } from './Admin/blockunblockbuyer/blockunblockbuyer.component';
import { DailyreportsComponent } from './Admin/dailyreports/dailyreports.component';
import { BuyerlandingpageComponent } from './Buyer/buyerlandingpage/buyerlandingpage.component';
import { BuyproductComponent } from './Buyer/buyproduct/buyproduct.component';
import { PurchasehistoryComponent } from './Buyer/purchasehistory/purchasehistory.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewcartComponent } from './Buyer/viewcart/viewcart.component';
import { ViewprofileComponent } from './Buyer/viewprofile/viewprofile.component';
import { SellerlandingpageComponent } from './Seller/sellerlandingpage/sellerlandingpage.component';
import { AdditemsComponent } from './Seller/additems/additems.component';

import { ViewitemsComponent } from './Seller/viewitems/viewitems.component';
import { ViewreportsComponent } from './Seller/viewreports/viewreports.component';
import { RegisterbuyerComponent } from './Account/registerbuyer/registerbuyer.component';
import { RegistersellerComponent } from './Account/registerseller/registerseller.component';
import { LoginComponent } from './Account/login/login.component';
import { HomeComponent } from './Account/home/home.component';
import { ViewsellerprofileComponent } from './Seller/viewsellerprofile/viewsellerprofile.component';
import { BuyereditprofileComponent } from './Buyer/buyereditprofile/buyereditprofile.component';

import { ViewComponent } from './Admin/view/view.component';
import { EditItemsComponent } from './Seller/edit-items/edit-items.component';
import { ViewsubComponent } from './Admin/viewsub/viewsub.component';


const routes: Routes = [
  {path:'Adminlandingpage',component:AdminlandingpageComponent,
  children:[
    {path:'Addcategory',component:AddcategoryComponent},
    {path:'Addsubcategory',component:AddsubcategoryComponent},
    {path:'View',component:ViewComponent},
    {path:'Viewsub',component:ViewsubComponent},
    {path:'blockunblockseller',component:BlockunblocksellerComponent},
    {path:'blockunblockbuyer',component:BlockunblockbuyerComponent},
    {path:'dailyreports',component:DailyreportsComponent}
  ]},
  {path:'Buyerlandingpage',component:BuyerlandingpageComponent,
  children:[
    {path:'Buyproduct',component:BuyproductComponent},
    {path:'Purchasehistory',component:PurchasehistoryComponent},
    {path:'Search',component:SearchComponent},
    {path:'Viewcart',component:ViewcartComponent},
    {path:'Viewprofile',component:ViewprofileComponent},
    {path:'Buyereditprofile',component:BuyereditprofileComponent}
  ]},
  {path:'Sellerlandingpage',component:SellerlandingpageComponent,
  children:[
    {path:'Additems',component:AdditemsComponent},
    {path:'Viewitems',component:ViewitemsComponent},
    {path:'Viewsellerprofile',component:ViewsellerprofileComponent},
    {path:'edititems',component:EditItemsComponent},
    {path:'Viewreports',component:ViewreportsComponent},
   
  ]},
  {path:'home',component:HomeComponent,
  children:[
  {path:'Registerbuyer',component:RegisterbuyerComponent},
  {path:'login',component:LoginComponent},
  {path:'Registerseller',component:RegistersellerComponent},
  ]},
  {path:'',redirectTo:'login',pathMatch:"full"}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
