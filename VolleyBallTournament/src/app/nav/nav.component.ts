import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  mobile = window.innerWidth < 850 ? true : false;

  show = false;

  constructor() { }

  ngOnInit() {
    this.isMobile = this.isMobile.bind(this);
    window.addEventListener('resize', this.isMobile);
  }

  showOrHideNav() {
    if (this.show === false) {
      this.show = true;
    } else if (this.show === true) {
      this.show = false;
    }
  }

  isMobile() {
    this.mobile = window.innerWidth < 850 ? true : false;
  }

}
