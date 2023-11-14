import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  listNavbar = [
    {
      label: "Explore",
      route: "/"
    },
    {
      label: "Favorite",
      route: "/favorite"
    },
  ]
}
