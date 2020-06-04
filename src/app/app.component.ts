import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ampnet-billing-frontend';
  componentTitle = "ABC"

  constructor() {
    this.activateTooltips()
  }

  // Popper.JS requires this function to be called anywhere in the code to activate the tooltips. 
  // This seemed like a reasonable place to put it.
  activateTooltips() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }
}
