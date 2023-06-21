import {Component} from '@angular/core';

export interface Slug {
  id: number | undefined;
  name: string | undefined;

  image: string | undefined;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  slugs: Slug[] = [
    {id: 5, name: 'Áo polo' , image: 'https://bizweb.dktcdn.net/100/438/408/themes/904142/assets/home_preivew_sanpham_3_image_desktop.jpg?1685174295403'},
    {id: 6 , name: 'Áo thun', image: 'https://bizweb.dktcdn.net/100/438/408/themes/904142/assets/home_preivew_sanpham_2_image_desktop.jpg?1685174295403'},
    {id: 8 , name: 'Áo sơ mi', image: 'https://bizweb.dktcdn.net/100/438/408/themes/904142/assets/home_preivew_sanpham_7_image_desktop.jpg?1685174295403'},
  ]
}
