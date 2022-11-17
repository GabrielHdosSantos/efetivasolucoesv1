import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private router: Router, private scoller: ViewportScroller) {}

  ngOnInit(): void {}

  mobileMenu: any;

  goToHome() {
    this.router.navigate(['home']);
  }

  goToTecnologias() {
    this.router.navigate(['tecnologias']);
  }

  goToContact() {
    this.router.navigate(['contact'])
  }

  goDown() {
    if ((this.router.url as string) == '/tecnologias') {
      this.router.navigate(['home']);
      this.scoller.scrollToAnchor('missao');
    } else {
      this.scoller.scrollToAnchor('missao');
    }
  }

  goToAboutUs() {
    if ((this.router.url as string) == '/tecnologias') {
      this.router.navigate(['home']);
      this.scoller.scrollToAnchor('sobre-nos');
    } else {
      this.scoller.scrollToAnchor('sobre-nos');
    }
  }
}
