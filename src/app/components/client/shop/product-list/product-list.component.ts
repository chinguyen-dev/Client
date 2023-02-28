import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  productImg= [
    'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/bln6030-ncf-sjn4004-tra-10-ao-ba-lo-nu-yodyvn.jpg?v=1677547681000',
    'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/tsn6012-tra-sjn4022-nsu-13.jpg?v=1677231086000',
    'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/atn5036-tim-5.jpg?v=1668052091000',
    'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/atn5064-den-3.jpg?v=1667959500000',
    'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/atn5110-cb1-4.jpg?v=1670231765000',
    'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/atn5136-den-7.jpg?v=1669887747000'
  ];
}
