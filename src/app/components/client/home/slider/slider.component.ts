import {Component, Input} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  sliderOption: OwlOptions = {
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
}
