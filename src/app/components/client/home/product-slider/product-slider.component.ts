import {Component, Input, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {ProductService} from "../../../../services/product.service";
import {Slug} from "../home.component";
@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements OnInit {
  @Input() slug: Slug | undefined;
  isActive: boolean | undefined;

  listProductFirst: Array<any> = [];
  listProductLast: Array<any> = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts() {
    this.productService.getProductByCategory(this.slug?.id).subscribe({
      next: response => {
        response.forEach((item: any, index: number) =>
          index < 4 ? this.listProductFirst.push(item) : this.listProductLast.push(item))
      },
      error: err => console.log(err)
    })
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
}
