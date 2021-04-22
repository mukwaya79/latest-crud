import { HouseService } from './services/house.service';
import { StationaryService } from './services/stationary.service';
import { HealthService } from 'src/app/services/health.service';
import { IctService } from './services/ict.service';
import { FoodService } from './services/food.service';
import { AssetService } from './services/asset.service';

import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SupplierComponent } from './components/supplier/supplier/supplier.component';
import { ViewsupplierComponent } from './component/viewsupplier/viewsupplier.component';
import { CategoryComponent } from './components/category/category.component';
import { ViewcategoryComponent } from './components/viewcategory/viewcategory.component';
import { FoodComponent } from './component/food/food.component';
import { HealthComponent } from './component/health/health.component';
import { HousekeepingComponent } from './componet/housekeeping/housekeeping.component';
import { IctComponent } from './component/ict/ict.component';
import { PromotionalComponent } from './component/promotional/promotional.component';
import { StationaryComponent } from './component/stationary/stationary.component';
import { AssetComponent } from './component/asset/asset.component';
import { ViewassetComponent } from './components/viewasset/viewasset.component';
import { ViewfoodComponent } from './components/viewfood/viewfood.component';
import { ViewhealthComponent } from './components/viewhealth/viewhealth.component';
import { ViewhouseComponent } from './components/viewhouse/viewhouse.component';
import { ViewictComponent } from './components/viewict/viewict.component';
import { ViewgiftComponent } from './components/viewgift/viewgift.component';
import { ViewstationaryComponent } from './components/viewstationary/viewstationary.component';
import { WellsService } from './services/wells.service';
import { UpdatesupplierComponent } from './component/updatesupplier/updatesupplier.component';
import { UpdateassetComponent } from './update/updateasset/updateasset.component';
import { UpdatefoodComponent } from './update/updatefood/updatefood.component';
import { UpdateictComponent } from './update/updateict/updateict.component';
import { UpdatehealthComponent } from './update/updatehealth/updatehealth.component';
import { UpdatestationaryComponent } from './update/updatestationary/updatestationary.component';
import { UpdatehouseComponent } from './update/updatehouse/updatehouse.component';
import { UpdategiftComponent } from './update/updategift/updategift.component';
import { GiftService } from './services/gift.service';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    SupplierComponent,
    ViewsupplierComponent,
    CategoryComponent,
    ViewcategoryComponent,
    FoodComponent,
    HealthComponent,
    HousekeepingComponent,
    IctComponent,
    PromotionalComponent,
    StationaryComponent,
    AssetComponent,
    ViewassetComponent,
    ViewfoodComponent,
    ViewhealthComponent,
    ViewhouseComponent,
    ViewictComponent,
    ViewgiftComponent,
    ViewstationaryComponent,
    UpdatesupplierComponent,
    UpdateassetComponent,
    UpdatefoodComponent,
    UpdateictComponent,
    UpdatehealthComponent,
    UpdatestationaryComponent,
    UpdatehouseComponent,
    UpdategiftComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,WellsService,AuthGuard,AssetService,FoodService,IctService,HealthService,
  StationaryService,HouseService,GiftService],
  bootstrap: [AppComponent]
})
export class AppModule { }
