import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fad } from '@fortawesome/pro-duotone-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { BillingComponent } from './billing/billing.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewBillingMethodComponent } from './billing/new-billing-method/new-billing-method.component';
import { SecureLayoutComponent } from './secure-layout/secure-layout.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { ElectricityStatsComponent } from './electricity-stats/electricity-stats.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { WalletComponent } from './wallet/wallet.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    BillingComponent,
    UserProfileComponent,
    NewBillingMethodComponent,
    SecureLayoutComponent,
    PublicLayoutComponent,
    ElectricityStatsComponent,
    NotificationsComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fad)
  }

}
