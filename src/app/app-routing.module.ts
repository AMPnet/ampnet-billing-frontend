import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BillingComponent } from './billing/billing.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewBillingMethodComponent } from './billing/new-billing-method/new-billing-method.component';


const routes: Routes = [
  { path: 'dash', component: DashboardComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'billing/new', component: NewBillingMethodComponent },
  { path: 'user_profile', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
