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
          'https://i.imgur.com/SZLg3vG.jpg',
        thumbnailImageSrc:
          'https://www.queroviajarmais.com/wp-content/uploads/2020/08/lago-louise.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
      {
        previewImageSrc:
          'https://sociisrh.com.br/wp-content/uploads/2019/06/Por-que-manter-a-equipe-trabalho-unida-e-tao-dificil-870x490.jpg',
        thumbnailImageSrc:
          'https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669__480.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
      {
        previewImageSrc:
          'https://thecoachingcentre.com.au/wp-content/uploads/2020/05/b-n9.jpg',
        thumbnailImageSrc:
          './../images/img-2.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
      {
        previewImageSrc:
          'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/EyvF0jkPg/videoblocks-multiethnic-colleagues-teamwork-in-modern-healthy-office-african-american-man-sits-on-table-plays-with-little-football_sjdcu7ewq_thumbnail-1080_01.png',
        thumbnailImageSrc:
        'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/EyvF0jkPg/videoblocks-multiethnic-colleagues-teamwork-in-modern-healthy-office-african-american-man-sits-on-table-plays-with-little-football_sjdcu7ewq_thumbnail-1080_01.png',
        alt: 'Description for Image 2',
        title: 'Title 2',
      }
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
