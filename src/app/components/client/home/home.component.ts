import {Component} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  sliders: any = [
    {
      'image': 'https://bizweb.dktcdn.net/100/438/408/themes/897269/assets/slider_1.jpg?1677837132233'
    },
    {
      'image': 'https://bizweb.dktcdn.net/100/438/408/themes/897269/assets/slider_2.jpg?1677837132233'
    },
    {
      'image': 'https://bizweb.dktcdn.net/100/438/408/themes/897269/assets/slider_3.jpg?1677837132233'
    },
  ]

  options: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  productSlider: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  products = [
    'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/bln6030-ncf-sjn4004-tra-10-ao-ba-lo-nu-yodyvn.jpg?v=1677547681000',
    'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/tsn6012-tra-sjn4022-nsu-13.jpg?v=1677231086000',
    'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/atn5036-tim-5.jpg?v=1668052091000',
    'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/atn5064-den-3.jpg?v=1667959500000',
    'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/atn5110-cb1-4.jpg?v=1670231765000',
    'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/atn5136-den-7.jpg?v=1669887747000'
  ];
}
