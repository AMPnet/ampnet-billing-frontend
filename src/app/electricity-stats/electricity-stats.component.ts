import { Component, OnInit } from '@angular/core';
import { ElectricityStatsViewModel } from './electricity-stats.viewmodel';

@Component({
  selector: 'app-electricity-stats',
  templateUrl: './electricity-stats.component.html',
  styleUrls: ['./electricity-stats.component.css']
})
export class ElectricityStatsComponent implements OnInit {

  vm: ElectricityStatsViewModel;

  constructor() { 
    this.vm = {
      coreStats: [
        {
          title: "Today",
          production: "72.31 kWh",
          consumption: "61.65 kWh"
        },
        {
          title: "This week",
          production: "502.01 kWh",
          consumption: "444.23 kWh"
        },
        {
          title: "This month",
          production: "2201.11 kWh",
          consumption: "1840.00 kWh"
        }
      ]
    }
  }

  ngOnInit(): void {
  }

}
