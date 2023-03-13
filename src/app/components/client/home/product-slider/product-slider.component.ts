import {Component, Input, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements OnInit {
  @Input() category: string | undefined
  listItemFirst: Array<any> = [];
  listItemLast: Array<any> = [];
  isActive: boolean | undefined;

  ngOnInit(): void {
    // call API return
    this.handler(this.products);
  }


  productSliderOption: OwlOptions = {
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
    'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/atn5136-den-7.jpg?v=1669887747000',
    'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/ao-polo-nu-apn3700-tna-cvn5072-nab-1-yodyvn.jpg?v=1675313560000',
    'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apm3681-cba-qjm3021-den-2-2.jpg?v=1677121919000',
    // 'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/san5002-hog-cvn5148-tra-1.jpg?v=1673409188000',
    // 'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/sam5039-den-5.jpg?v=1674020318000',
    // 'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/ao-polo-nu-apn3700-tna-cvn5072-nab-1-yodyvn.jpg?v=1675313560000',
    // 'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apm3681-cba-qjm3021-den-2-2.jpg?v=1677121919000',
    // 'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/san5002-hog-cvn5148-tra-1.jpg?v=1673409188000',
    // 'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/sam5039-den-5.jpg?v=1674020318000'
  ];

  handler(data: Array<any>) {
    for (let i = 0; i < data.length; i++)
      i < 4 ? this.listItemFirst?.push(data[i]) : this.listItemLast?.push(data[i]);
  }
}
