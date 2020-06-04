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

  constructor() {
    this.sidebar = [
      this.consumptionSection(),
      this.userManagementSection()
    ]
  }


  ngOnInit(): void {
  }

  // Section generators ------------------------------
  consumptionSection(): SidebarModel {
    return {
      sectionTitle: "",
      section: [
        {
          title: "Dashboard",
          iconName: "house",
          route: "dash"
        },
        {
          title: "Consumption & Production",
          iconName: "plug",
          route: "consumption"
        }
      ]
    }
  }

  userManagementSection(): SidebarModel {
    return  {
      sectionTitle: "",
      section: [
        {
          title: "User profile",
          iconName: "user",
          route: "user_profile"
        },
        {
          title: "Billing",
          iconName: "credit-card",
          route: "billing"
        }, 
        {
          title: "Consumption",
          iconName: "chart-area",
          route: "consumption"
        }
      ]
    }
  }
  // =============================================================

  // Events
  sidebarClicked() {
    $('[data-toggle="tooltip"]').tooltip('hide')
  }
  // =============================================================

}
