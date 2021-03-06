import { Component, OnInit } from '@angular/core';
import { NavbarViewModel } from './navbar.viewmodel';
import $ from 'jquery'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  vm: NavbarViewModel

  constructor() { 
    this.vm = {
      userFirstName: "Johnny",
      userLastName: "Cruise"
    }
  }

  ngOnInit(): void {
  }

  // Events
  notificationsIconClicked() {

    let collapsedClass = "notifications-collapsed";
    let notifications = $("#notifications");
    
    notifications.toggleClass(collapsedClass)
  }
  // =======================

}
