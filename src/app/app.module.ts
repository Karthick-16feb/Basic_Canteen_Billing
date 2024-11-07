import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NodeUtilityService } from './node-utility.service';
import { FormsModule } from '@angular/forms';
import { ForgetComponent } from './forget/forget.component';
import { DeleteAdminComponent } from './delete-admin/delete-admin.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { UpdateCostComponent } from './update-cost/update-cost.component';
import { DeleteFoodComponent } from './delete-food/delete-food.component';
import { MakeOrderComponent } from './make-order/make-order.component';
import { MyHighlightDirective } from './my-highlight.directive'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgetComponent,
    DeleteAdminComponent,
    AddFoodComponent,
    UpdateCostComponent,
    DeleteFoodComponent,
    MakeOrderComponent,
    MyHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NodeUtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
