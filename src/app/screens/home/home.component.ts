import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

interface Imagem {
  previewImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private router: Router, private scroller: ViewportScroller) {
    this.images = [
      {
        previewImageSrc:
          'https://i.imgur.com/H010hQd.jpg',
        thumbnailImageSrc:
          'https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669__480.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
      {
        previewImageSrc:
          'https://i.imgur.com/w9srI8y.jpg',
        thumbnailImageSrc:
          './../images/img-2.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
      {
        previewImageSrc:
          'https://i.imgur.com/7I9028M.jpg',
        thumbnailImageSrc:
          'https://blog.emania.com.br/wp-content/uploads/2015/12/Papel-de-Parede-de-Paisagem.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
      {
        previewImageSrc:
          'https://i.imgur.com/SZLg3vG.jpg',
        thumbnailImageSrc:
          'https://www.queroviajarmais.com/wp-content/uploads/2020/08/lago-louise.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
    ];
  }

  goToTecnologias() {
    this.router.navigate(['tecnologias']);
  }


  images: Imagem[] = [];

  goToAboutUs() {
      this.scroller.scrollToAnchor('sobre-nos');
    }

}
