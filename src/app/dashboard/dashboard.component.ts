import { Component, OnInit } from '@angular/core';
import { DashboardViewModel } from './dashboard.viewmodel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  vm: DashboardViewModel

  constructor() {

    this.vm = {
      bills: [
        { amount: "$231.22", due: "22.5.2020."},
        { amount: "$205.32", due: "22.6.2020."},
        { amount: "$241.11", due: "22.7.2020."}
      ]
    }

  }

  ngOnInit(): void {
  }

}
