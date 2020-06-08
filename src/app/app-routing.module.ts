import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BillingComponent } from './billing/billing.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewBillingMethodComponent } from './billing/new-billing-method/new-billing-method.component';
import { ElectricityStatsComponent } from './electricity-stats/electricity-stats.component';
import { WalletComponent } from './wallet/wallet.component';


const routes: Routes = [
  { path: 'dash', component: DashboardComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'billing/new', component: NewBillingMethodComponent },
  { path: 'user_profile', component: UserProfileComponent },
  { path: 'stats', component: ElectricityStatsComponent },
  { path: 'wallet', component: WalletComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
