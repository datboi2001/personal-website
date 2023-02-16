import { Component } from '@angular/core';
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  headerLinks = [{name: 'Home', href: ""}, {name: "Projects", href:"projects"}, {name: "Contact", href:"contact"}];
  activeLink: string = '';


  constructor(private readonly router: Router){

  }

  ngOnInit(){
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        console.log(val.url);
        this.activeLink = val.url.slice(1);
      }
    });
  }
}
