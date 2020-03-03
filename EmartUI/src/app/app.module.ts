import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from'@angular/forms';
import{FormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerlandingpageComponent } from './Buyer/buyerlandingpage/buyerlandingpage.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewcartComponent } from './Buyer/viewcart/viewcart.component';
import { BuyproductComponent } from './Buyer/buyproduct/buyproduct.component';
import { PurchasehistoryComponent } from './Buyer/purchasehistory/purchasehistory.component';
import { ViewprofileComponent } from './Buyer/viewprofile/viewprofile.component';
import { SellerlandingpageComponent } from './Seller/sellerlandingpage/sellerlandingpage.component';
import { AdditemsComponent } from './Seller/additems/additems.component';
import { ViewitemsComponent } from './Seller/viewitems/viewitems.component';
import { ViewreportsComponent } from './Seller/viewreports/viewreports.component';
import { AdminlandingpageComponent } from './Admin/adminlandingpage/adminlandingpage.component';
import { BlockunblockbuyerComponent } from './Admin/blockunblockbuyer/blockunblockbuyer.component';
import { BlockunblocksellerComponent } from './Admin/blockunblockseller/blockunblockseller.component';
import { AddcategoryComponent } from './Admin/addcategory/addcategory.component';
import { AddsubcategoryComponent } from './Admin/addsubcategory/addsubcategory.component';
import { DailyreportsComponent } from './Admin/dailyreports/dailyreports.component';
import { LoginComponent } from './Account/login/login.component';
import { RegistersellerComponent } from './Account/registerseller/registerseller.component';
import { RegisterbuyerComponent } from './Account/registerbuyer/registerbuyer.component';
import { HomeComponent } from './Account/home/home.component';
import { AccountService } from './Account/account.service';
import { ViewsellerprofileComponent } from './Seller/viewsellerprofile/viewsellerprofile.component';
import { SellereditprofileComponent } from './Seller/sellereditprofile/sellereditprofile.component';
import { BuyereditprofileComponent } from './Buyer/buyereditprofile/buyereditprofile.component';
import { ViewComponent } from './Admin/view/view.component';
import { EditItemsComponent } from './Seller/edit-items/edit-items.component';
import { ViewsubComponent } from './Admin/viewsub/viewsub.component';



@NgModule({
  declarations: [
    AppComponent,
    BuyerlandingpageComponent,
    SearchComponent,
    ViewcartComponent,
    PurchasehistoryComponent,
    BuyproductComponent,
    ViewprofileComponent,
    SellerlandingpageComponent,
    AdditemsComponent,
    ViewitemsComponent,
    ViewreportsComponent,
    AdminlandingpageComponent,
    BlockunblockbuyerComponent,
    BlockunblocksellerComponent,
    AddcategoryComponent,
    AddsubcategoryComponent,
    DailyreportsComponent,
    LoginComponent,
    RegistersellerComponent,
    RegisterbuyerComponent,
    HomeComponent,
    ViewsellerprofileComponent,
    SellereditprofileComponent,
    BuyereditprofileComponent,
    ViewComponent,
    EditItemsComponent,
    ViewsubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
