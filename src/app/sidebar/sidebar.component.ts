import { Component, OnInit } from '@angular/core';
import { SidebarModel, SidebarSectionModel } from './sidebar.model';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidebar: SidebarModel[]
  isCollapsed: boolean = true;

  constructor() {
    this.sidebar = [
      this.consumptionSection(),
      this.userManagementSection(),
      this.logoutSection()
    ]
  }


  ngOnInit(): void {
  }

  // Section generators ------------------------------
  consumptionSection(): SidebarModel {
    return {
      sectionTitle: "",
      section: [
        { title: "Dashboard", iconName: "house", route: "dash" },
        { title: "Electric flow", iconName: "plug", route: "stats" }, 
        { title: "My devices", iconName: "outlet", route: "my_devices" }
      ]
    }
  }

  userManagementSection(): SidebarModel {
    return  {
      sectionTitle: "",
      section: [
        {
          title: "User profile",
          iconName: "user-cog",
          route: "user_profile"
        },
        {
          title: "Wallet",
          iconName: "wallet",
          route: "wallet"
        },
        {
          title: "Billing",
          iconName: "credit-card",
          route: "billing"
        }
      ]
    }
  }

  logoutSection(): SidebarModel {
    return {
      sectionTitle: "",
      section: [
        {
          title: "Log Out",
          iconName: "sign-out",
          route: "logout"
        }
      ]
    }
  }
  // =============================================================


  

  // Events
  sidebarClicked() {
    $('[data-toggle="tooltip"]').tooltip('hide')
  }

  toggleSidebarClicked() {
    this.isCollapsed = !this.isCollapsed;
  }
  // =============================================================

}
