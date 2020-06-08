import { Component, OnInit } from '@angular/core';
import { ElectricityStatsViewModel } from './electricity-stats.viewmodel';
import { Chart } from 'chart.js'

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
    let context = document.getElementById('main-chart-canvas')
    let chart = new Chart(context, {
      type: 'line',
      data: {
        labels: ["22.5.","23.5.","24.5.","26.5.","27.5","28.5","29.5","30.5","31.5","1.6."],
        datasets: [{ 
            data: [250,114,-10,-25,-33,-5,12,35,65,221],
            label: "Africa",
            borderColor: "#3e95cd",
            fill: false
          }
        ]
      }, options: {
        legend: { display: false },
        scales: {
          yAxes: [{
              ticks: {
                  fontColor: "rgba(0,0,0,0.5)",
                  fontStyle: "bold",
                  beginAtZero: true,
                  maxTicksLimit: 5,
                  padding: 20
              },
              gridLines: {
                  drawTicks: false,
                  display: false
              }}],
          xAxes: [{
              gridLines: {
                  zeroLineColor: "transparent"},
              ticks: {
                  padding: 20,
                  fontColor: "rgba(0,0,0,0.5)",
                  fontStyle: "bold"
              }
          }]
      }
      }
    })

  }

}
