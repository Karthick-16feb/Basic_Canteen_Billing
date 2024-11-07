import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { DeleteAdminComponent } from './delete-admin/delete-admin.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { DeleteFoodComponent } from './delete-food/delete-food.component';
import { UpdateCostComponent } from './update-cost/update-cost.component';
import { MakeOrderComponent } from './make-order/make-order.component';


const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch:'full'},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'forget',component:ForgetComponent},
  {path:'delete-admin', component:DeleteAdminComponent},
  {path:'add-food',component:AddFoodComponent},
  {path:'delete-food', component:DeleteFoodComponent},
  {path:'update-cost', component:UpdateCostComponent},
  {path:'make-order', component:MakeOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
